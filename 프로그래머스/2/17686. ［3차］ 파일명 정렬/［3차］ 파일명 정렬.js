function solution(files) {
    var answer = [];
   
    files = files.map((file)=>{
        return file.split((/(\d+)/));
    })
    console.log(files)
    files.sort((a,b)=>a[0].toLowerCase().localeCompare(b[0].toLowerCase()) || parseInt(a[1]) - parseInt(b[1]))
    files = files.map((file)=>file.join(""))
    return files;
}