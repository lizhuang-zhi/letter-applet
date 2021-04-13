let publicTools = {

  // 更改对象的'键名'
  renameKey(obj, old_key, new_key) {
    // 检查如果 old key = new key   
    if (old_key !== new_key) {
      //修改对象的旧键提取描述
      Object.defineProperty(obj, new_key,
        Object.getOwnPropertyDescriptor(obj, old_key));
      delete obj[old_key]; // 删除旧键
    }
  }


}

module.exports = publicTools;