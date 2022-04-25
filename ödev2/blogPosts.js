const posts = [
  {
    name: "Yazılım Bazen Çok Canımı Yakıyor...",
    author: "Sevim Selin Özsoy",
    dateCreated: "2 months ago",
  },
  {
    name: "010001110110100101111010011011000110100100100000011011010110000101101011011000010110110001100101",
    author: "Unknown",
    dateCreated: "Some Time Ago...",
  },
];

const listPosts = () => {
  posts.map((posts) => console.log(posts.name));
};

const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    //reject('İstediğiniz postu getiremedik,görmeseniz de olurdu zaten');
  });
};

async function getPosts() {
  try{
    await addPost({
    name: "Çok da becermedim ama oldu gibi: bozuk kod bloğu yazısı",
    author: "Sevim'den başka birisi olabilir mi acaba?",
    dateCreated: "Just seconds ago...",
  });
  listPosts();
}catch(err){
    console.log(err);
}
}

getPosts();
