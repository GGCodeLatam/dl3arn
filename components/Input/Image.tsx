import Image from "next/image";
import { HTMLProps, useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import styled from "styled-components";
import { InputChange } from "utils/types";

const Overlay = styled.div`
  opacity: 0;
  align-items: center;
  background-color: #000a;
  color: #fff;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  .icon {
    width: 1.5em;
    height: 1.5em;
  }
  transition: opacity 0.15s;
  :hover {
    opacity: 1;
  }
`;

interface Props extends HTMLProps<HTMLInputElement> {
  init?: string | null;
  defaultImages?: (string | null)[];
}
function ImageInput({
  init,
  defaultImages,
  onChange,
  className,
  ...props
}: Props) {
  const [data, setData] = useState<File | null | string>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const _onChange = (e: InputChange) => {
    const {
      target: { files },
    } = e;
    if (!files) return;
    setData(files[0]);
    onChange!(e);
  };

  useEffect(() => {
    if (!data) return setPreview(null);
    if (typeof data === "string") return setPreview(data);
    const objectUrl = URL.createObjectURL(data);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [data]);

  return (
    <div className="input-container">
      <label htmlFor="avatar" className={className}>
        <div className="img-preview">
          <>
            {preview ? (
              <div className="img-container">
                <Image
                  layout="fill"
                  className="img"
                  src={preview}
                  alt={typeof data === "string" ? data : data?.name}
                />
              </div>
            ) : (
              (init && (
                <div className="img-container">
                  <Image
                    layout="fill"
                    className="img"
                    src={init}
                    alt={typeof data === "string" ? data : data?.name}
                  />
                </div>
              )) || <span className="no-image" />
            )}

            <Overlay className="overlay">
              <AiOutlineCamera className="icon" />
            </Overlay>
          </>
        </div>

        <input
          onChange={_onChange}
          id="avatar"
          name="avatar"
          type="file"
          {...props}
        />
      </label>

      <div className="defaults">
        {defaultImages?.map(
          (img) =>
            img && (
              <button
                onClick={() => setData(img)}
                type="button"
                key={img}
                className="default-img"
              >
                <Image layout="fill" className="img" alt={img} src={img} />
              </button>
            )
        )}

        <button
          onClick={() => setData(init || "")}
          type="button"
          className="default-img"
        >
          <Image layout="fill" className="img" alt={init || ""} src={init} />
        </button>
      </div>
    </div>
  );
}

export default ImageInput;
