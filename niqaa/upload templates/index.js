document.getElementById("uploadButton").addEventListener("click", () => {
  const fileInput = document.getElementById("fileInput");
  const files = fileInput.files;

  const fileInput_desktop_image = document.getElementById("desktop_image");
  const desktop_image = fileInput_desktop_image.files;

  // const fileInput_tablet_image = document.getElementById("tablet_image");
  // const tablet_image = fileInput_tablet_image.files;

  // const fileInput_mobile_image = document.getElementById("mobile_image");
  // const mobile_image = fileInput_mobile_image.files;

  const zip = document.getElementById("zip_file");
  const zip_file = zip.files;

  const formData = new FormData();
  formData.append("name", "section test 2");
  formData.append("coming_soon", 0);
  formData.append("multiPages", 0);
  formData.append("categories[]", 5);
  // formData.append("category_id[]", 5);
  // formData.append("category_id[]", 10);
  // formData.append("categories[]", 3);
  // formData.append("categories[]", 4);

  // [1, 2, 3].forEach(id => {
  //   formData.append("category_id[]", id);
  // });
  // formData.append("category_id", [1]);
  // var categories = [1, 2, 3];
  // categories.forEach(function (cat) {
  //   formData.append("category_id", cat);
  // });
  formData.append("group_id", 1);
  var themeColors = [
    { name: "default", colors: ["#E8E8E8", "#060606", "#303030", "#F6F6F6"] },
    { name: "theme 1", colors: ["#7A90DA", "#100F28", "#E7E6FF", "#E7F2EF"] },
    { name: "theme 2", colors: ["#697565", "#181C14", "#717365", "#FEFFF5"] },
    { name: "theme 3", colors: ["#4ECE70", "#000000", "#636B56", "#FAFFF3"] },
    { name: "theme 4", colors: ["#A2D5C6", "#000000", "#E0F8E9", "#F6F6F6"] },
    { name: "theme 5", colors: ["#613681", "#14061F", "#E1D1ED", "#FCF8FF"] },
  ];



  formData.append("theme_colors", JSON.stringify(themeColors));
  // const tags = ['tag1', 'tag2', 'tag3'];
  // tags.forEach(tag => {
  //   formData.append('tags[]', tag);
  // });
  // themeColors.forEach((colorSet, index) => {
  //   colorSet.forEach((color, subIndex) => {
  //     formData.append(`theme_colors[${index}][${subIndex}]`, color);
  //   });
  // });
  // console.log(themeColors);
  // var tagsArray = ["tag1", "tag2", "tag3"];
  // tagsArray.forEach(function (tag) {
  //   formData.append("tags[]", tag);
  // });
  // formData.append("theme_colors", themeColors);
  formData.append("section_image", desktop_image[0]);

  formData.append("desktop_image", desktop_image[0] ?? "");
  formData.append("thumbnail", desktop_image[0] ?? "");

  formData.append("zip_file", zip_file[0] ?? "");
  // formData.append("tablet_image", tablet_image[0] ?? "");
  // formData.append("mobile_image", mobile_image[0] ?? "");

  if (files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      formData.append("files[]", files[i]);
    }
  }

  const url = "https://api.testingbuilder.com/api/section/";
  const headers = {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxNSIsImp0aSI6IjAxNTkxOTljY2IwNDI2ZGJlZGZlZTVhM2Y4Mzg3MzBkOTVmZjRjZjVmYWE1MzY3MzU5ZmU3NjY5MmMzYmZjM2VkYzkxNDRjNzg0YWFkMDY1IiwiaWF0IjoxNzcyNDU3NjU2LjA2NTQyNCwibmJmIjoxNzcyNDU3NjU2LjA2NTQyNiwiZXhwIjoxODAzOTkzNjU2LjA2MTE2NSwic3ViIjoiMTQ2Iiwic2NvcGVzIjpbXX0.HICdRaoV7q1BIPN9hAyzEnLXuJ_KAIa5hWN00zTLevYUvLJj8lL3tAvXSD7fJ-uoy8Ld-xN_YQL3ueg_66Cu08ciFEWNoYg-SVaEiWBrmYsLe8P4okVKnJ61dsgkfGFjbobkC35tHK7Ai22717o4oieY5EwcZOGcr_kiKORzCplXZggwT4-1RrVGarH48RCCshz-lPfUiRxgOIA0GDpZDvA9KHq3y2ri4if4_kNiPeat7_N8lfhPgktaGXwckGUGpvDJnhMYeiIXhj7HOzg8YusYkBqe6KziQNCmk6dBhoMBP-iYQN4hTwvwEfdG5n_JxptZyN7GV0i8I4R3p8ysl2-HtQLKuN_UHEz4GNKbpI-47UpSNtCawnAINBd_2y79fHp0oZ4oAB7b931w51TguQ81NeRIvFPoppJtrkGkDqktM7ngiAC5OCAGd5aHqfDEa1jfjQ583IAng6ioXJIrWaOk7SSx52M9txgHmymwS41074bmOOjMTd_c_mPcVSg8nfgpG8X99FqHgtuDUEAeO551zA8A6Zp4eae3IfOdwFUy6-1a0kaWY2N9g3a1QUWva5T4fwRj0KVFXC2GUq8UVQi2w8QWsY58Vt_qvZA0efs9VtiBzgUGgrRoZCD0Et2akwpH8uj2HWWaPFft0HR5vLLF4iNuhT_y51P9ZlfDV7s",
    Accept: "application/json",
    // 'Content-Type': `application/json`,
  };
  console.log("formData", formData);
  // Make a fetch request to upload the files
  fetch(url, {
    headers,
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Upload successful", data);
    })
    .catch((error) => {
      console.error("Upload error", error);
    });

  //   const payload = "{\"html\":\"<!DOCTYPEhtml>\\r\\n<htmllang=\\\"en\\\">\\r\\n<head>\\r\\n<metacharset=\\\"UTF-8\\\">\\r\\n<metaname=\\\"viewport\\\"content=\\\"width=device-width,initial-scale=1.0\\\">\\r\\n<linkrel=\\\"stylesheet\\\"href=\\\".\\/style.css\\\">\\r\\n<title>ImageSlider<\\/title>\\r\\n<\\/head>\\r\\n<body>\\r\\n<sectionclass=\\\"slider\\\">\\r\\n<divclass=\\\"slider-container\\\">\\r\\n<divclass=\\\"slider-item\\\">\\r\\n<imgsrc=\\\".\\/images\\/image1.jpg\\\"alt=\\\"Image1\\\">\\r\\n<\\/div>\\r\\n<divclass=\\\"slider-item\\\">\\r\\n<imgsrc=\\\".\\/images\\/image2.jpg\\\"alt=\\\"Image2\\\">\\r\\n<\\/div>\\r\\n<divclass=\\\"slider-item\\\">\\r\\n<imgsrc=\\\".\\/images\\/image3.jpg\\\"alt=\\\"Image3\\\">\\r\\n<\\/div>\\r\\n<\\/div>\\r\\n<\\/section>\\r\\n<scriptsrc=\\\".\\/script.js\\\"><\\/script>\\r\\n<\\/body>\\r\\n<\\/html>\\r\\n\",\"js\":\"constsliderContainer=document.querySelector('.slider-container');\\r\\nletslideIndex=0;\\r\\n\\r\\nfunctionnextSlide(){\\r\\nslideIndex++;\\r\\nif(slideIndex>=sliderContainer.children.length){\\r\\nslideIndex=0;\\r\\n}\\r\\nupdateSlidePosition();\\r\\n}\\r\\n\\r\\nfunctionupdateSlidePosition(){\\r\\nconstoffset=-slideIndex*100;\\r\\nsliderContainer.style.transform=`translateX(${offset}%)`;\\r\\n}\\r\\n\\r\\n\\/\\/Starttheslider\\r\\nsetInterval(nextSlide,3000);\\/\\/Changeslideevery3seconds\\r\\n\",\"css\":\"body{\\r\\nmargin:0;\\r\\npadding:0;\\r\\nfont-family:Arial,sans-serif;\\r\\n}\\r\\n\\r\\n.slider{\\r\\nwidth:100%;\\r\\nheight:30%;\\r\\noverflow:hidden;\\r\\nposition:relative;\\r\\n}\\r\\n\\r\\n.slider-container{\\r\\ndisplay:flex;\\r\\ntransition:transform0.5sease-in-out;\\r\\n}\\r\\n\\r\\n.slider-item{\\r\\nflex:00100%;\\r\\n}\\r\\n\\r\\n.slider-itemimg{\\r\\nwidth:100%;\\r\\nheight:30%;\\r\\nobject-fit:fill;\\r\\n\\r\\n}\\r\\n\"}";
  //   ;

  // // Parse the JSON payload
  // const parsedPayload = JSON.parse(payload);

  // // Extract HTML, CSS, and JavaScript code
  // const htmlCode = parsedPayload.html;
  // const jsCode = parsedPayload.js;
  // const cssCode = parsedPayload.css;

  // // Output the extracted code
  // console.log("HTML Code:");
  // console.log(htmlCode);

  // console.log("JavaScript Code:");
  // console.log(jsCode);

  // console.log("CSS Code:");
  // console.log(cssCode);
});