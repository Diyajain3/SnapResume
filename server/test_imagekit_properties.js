import 'dotenv/config';
import ImageKit from '@imagekit/nodejs';

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

console.log("imageKit keys:", Object.keys(imageKit));
console.log("imageKit prototype keys:", Object.getOwnPropertyNames(Object.getPrototypeOf(imageKit)));
console.log("imageKit.url type:", typeof imageKit.url);
