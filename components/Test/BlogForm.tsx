import Input from "components/Input";
import { useAuth } from "context/firebase";
import { storage } from "services/firebase";
import { doc, DocumentReference, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { ChangeEvent, FormEvent, HTMLProps, useEffect, useState } from "react";
import { blogsCollection } from "services/firebase/store/collections";
import { InputChange } from "utils/types";
import { BlogModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";
import { BlogFormContainer } from "./BlogForm.styles";
import { BiSend } from "react-icons/bi";
import Textarea from "components/Input/Textarea";

interface Inputs {
  content: string;
  name: string;
  images: { file: File; caption: string }[];
}
interface Props extends Omit<HTMLProps<HTMLFormElement>, "onSubmit"> {
  onSubmit?: (ref: DocumentReference) => any;
}
function BlogForm({ onSubmit }: Props) {
  const [previews, setPreviews] = useState<string[]>([]);
  const [inputs, setInputs] = useState<Inputs>({
    images: [],
    content: "",
    name: "",
  });

  const {
    data: { user },
  } = useAuth();

  const onChange = ({ target: { files, name, value } }: InputChange) => {
    if (files) {
      setInputs((old) => ({
        ...old,
        images: Array.from(files).map((file) => ({ file, caption: "" })),
      }));
    } else setInputs((old) => ({ ...old, [name]: value }));
  };
  const _onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user?.email) return null;
    const { email } = user;
    const blog: Override<BlogModel, { images: Inputs["images"] }> = {
      ...inputs,
      name: inputs.name.trim(),
      content: inputs.content.trim(),
      creator: email,
      $created_at: new Date().getTime(),
      $id: inputs.name.toLowerCase().trim().replaceAll(/\s/g, "-"),
    };

    await addBlog(blog);
  };

  const handleCaption = (e: InputChange, index: number) => {
    setInputs((old) => ({
      ...old,
      images: old.images.map((image, i) =>
        index === i ? { ...image, caption: e.target.value } : image
      ),
    }));
  };

  const handleContent = ({
    target: { name, value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setInputs((old) => ({
      ...old,
      [name]: value,
    }));
  };

  useEffect(() => {
    const urls = inputs.images.map(({ file }) => URL.createObjectURL(file));
    setPreviews(urls);
    return () => {
      urls.map((url) => URL.revokeObjectURL(url));
      setPreviews([]);
    };
  }, [inputs.images]);

  return (
    <BlogFormContainer onSubmit={_onSubmit}>
      <Input
        onChange={onChange}
        value={inputs.name}
        name="name"
        label="Nombre"
        placeholder="Nombre"
      />

      <Textarea
        onChange={handleContent}
        value={inputs.content}
        type="textarea"
        label="content"
        name="content"
        placeholder="Contenido"
      />

      <label className="input-images">
        <span>Añadir imagenes</span>
        <div className="metadata">
          <p>{inputs.images.length} imagenes</p>
          <p className="size">
            {Math.round(
              inputs.images.reduce(
                (acc, current) => acc + current.file.size,
                0
              ) / 1024
            )}
            kb
          </p>
        </div>
        <input type="file" onChange={onChange} multiple />
      </label>

      <div className="images">
        {inputs.images.map((image, index) => (
          <div key={image.file?.name} className="image">
            <div className="left">
              {previews[index] && (
                <Image
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  src={previews[index]}
                  className="img"
                  alt=""
                />
              )}
            </div>
            <div className="right">
              <label>
                <span>Descripcion</span>
                <input
                  type="text"
                  placeholder="Descripcion"
                  required
                  value={inputs.images[index].caption}
                  onChange={(e) => handleCaption(e, index)}
                />
              </label>
            </div>
          </div>
        ))}
      </div>

      <button type="submit">
        <BiSend size={22} />
      </button>
    </BlogFormContainer>
  );
}

export default BlogForm;

async function addBlog(
  blog: Override<BlogModel, { images: Inputs["images"] }>
) {
  const blogRef = doc(blogsCollection, blog.$id);

  const images = await Promise.all(
    blog.images.map(async (image) => {
      const storageRef = ref(
        storage,
        `images/blogs/${blogRef.id}/${image.file.name}`
      );
      const { ref: imageRef } = await uploadBytes(storageRef, image.file);
      return { src: await getDownloadURL(imageRef), caption: image.caption };
    })
  );

  return await setDoc(blogRef, { ...blog, images });
}
