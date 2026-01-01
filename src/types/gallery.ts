export interface GalleryImage {
  url: string;
  alt: string;
}

export interface GalleryAlbum {
  images: GalleryImage[];
  title?: string;
  description?: string;
}

export type AlbumType = "peternakan" | "proses" | "distribusi";

export interface GalleryTab {
  key: AlbumType;
  label: string;
}
