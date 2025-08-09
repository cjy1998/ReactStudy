import prisma from "./prisma";

const urls = [
  "https://cj-links.oss-cn-beijing.aliyuncs.com/fons-heijnsbroek-IfRcHJcnWzc-unsplash.jpg",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/fons-heijnsbroek-LBcbPuWmPjw-unsplash.jpg",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/fons-heijnsbroek-RoM79jrYOlU-unsplash.jpg",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/fons-heijnsbroek-Wp-clBdqv0c-unsplash.jpg",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/jeremy-bishop-G9i_plbfDgk-unsplash.jpg",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/joe-woods-4Zaq5xY5M_c-unsplash.jpg",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/patrick-tomasso-5hvn-2WW6rY-unsplash.jpg",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/patrick-tomasso-QMDap1TAu0g-unsplash.jpg",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/peter-olexa-Q5GnQxjX7Jk-unsplash.jpg",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/peter-olexa-ZO4rHqkCat4-unsplash.jpg",
];

const main = async () => {
  for (const url of urls) {
    const result = await prisma.file.create({
      data: {
        name: url.split("/").pop(),
        url,
        type: "image/jpeg",
        isOffice: true,
      },
    });
  }
};
main().then(() => {
  console.log("done");
});
