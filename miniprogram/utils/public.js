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
  },
  //截取信件行内容
  /*
    lettercontent:信件内容
    lettercontentArr:信件行数组
    lineNum:行字数
  */
  // Interceptletterline(lettercontent,lettercontentArr,lineNum){
  //   //  let content=this.data.lettercontent
  //   //  let contentArr=this.data.lettercontentArr
  //    // 行字数
  //    let lineNum = this.data.lineNum;
  //    let start=0;
  //    let end=lineNum;
  //    // 截取每行，放入数组中
  //    for(var i=0;i<lettercontent.length/lineNum;i++){
  //     lettercontentArr[i]=content.substring(start,end);
  //      start+=lineNum;
  //      end+=lineNum;
  //    }
  //    return lettercontentArr;
  // }


}

module.exports = publicTools;