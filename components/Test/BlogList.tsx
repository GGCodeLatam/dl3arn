import Avatar from "components/Avatar";
import Image from "next/image";
import Link from "next/link";
import { Blogs as BlogsContainer, Images } from "styles/test.styles";
import { BlogModel } from "utils/types/firebase";
import { Override } from "utils/types/utility";

interface Props {
  blogs: Override<BlogModel, { $created_at: Date }>[];
}
function BlogsList({ blogs }: Props) {
  return (
    <BlogsContainer>
      {blogs.map(({ $id, images, $created_at, name, creator, content }) => (
        <Link key={name} href={`/blog/${$id}`}>
          <a>
            <article>
              <div className="main-content">
                {typeof creator === "object" ? (
                  <Avatar
                    className="avatar"
                    to="right"
                    img={creator?.avatar}
                    name={creator?.name}
                  />
                ) : null}

                <div className="header">
                  <h2>{name}</h2>

                  <time>
                    <div>
                      {$created_at.getHours()}:{$created_at.getMinutes()}
                    </div>
                    <div className="date">
                      {$created_at.getDate()}/{$created_at.getMonth()}/
                      {$created_at.getFullYear()}
                    </div>
                  </time>
                </div>

                <p>{content}</p>
              </div>
              {!!images.length && (
                <Images onlyOne={images.length === 1}>
                  {images.map((image) => (
                    <div
                      className="img-container"
                      key={typeof image !== "string" ? image.src : image}
                    >
                      <Image
                        className="img"
                        layout="fill"
                        src={typeof image !== "string" ? image.src : image}
                        alt=""
                      />
                    </div>
                  ))}
                </Images>
              )}
            </article>
          </a>
        </Link>
      ))}
    </BlogsContainer>
  );
}

export default BlogsList;
