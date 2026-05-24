import Image from "next/image";

type ImagePanelProps = {
  image: string;
  alt: string;
  caption?: string;
};

export function ImagePanel({ image, alt, caption }: ImagePanelProps) {
  return (
    <figure className="image-panel" data-aos="fade-left">
      <Image src={image} alt={alt} fill sizes="(min-width: 900px) 44vw, 100vw" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
