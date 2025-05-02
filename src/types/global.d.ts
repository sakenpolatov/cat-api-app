declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// types/images.d.ts
declare module "*.png" {
  const value: string;
  export default value;
}
