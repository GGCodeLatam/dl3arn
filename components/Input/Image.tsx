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
  width: 100%;
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
}
function ImageInput({ init, className, onChange }: Props) {
  const [data, setData] = useState<File | null>();
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

    const objectUrl = URL.createObjectURL(data);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [data]);

  return (
    <label className={className} htmlFor="avatar">
      <div className="img-preview">
        <>
          {preview ? (
            <div className="img-container">
              <Image
                layout="fill"
                className="img"
                src={preview}
                alt={data?.name}
              />
            </div>
          ) : (
            init && (
              <div className="img-container">
                <Image
                  layout="fill"
                  className="img"
                  src={init}
                  alt={data?.name}
                />
              </div>
            )
          )}

          <Overlay className="remove">
            <AiOutlineCamera className="icon" />
          </Overlay>
        </>
      </div>
      <input onChange={_onChange} id="avatar" name="avatar" type="file" />
    </label>
  );
}

export default ImageInput;
