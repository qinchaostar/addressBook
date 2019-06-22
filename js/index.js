$(function () {
   let arr =[
       {
           name:"胡歌",tell:15513262453,py:'huge'
       },
       {
           name:"彭于晏",tell:18406581111,py:'pengyuyan'
       },
       {
           name:"邓超",tell:18406581234,py:'dengchao'
       },
       {
           name:"杨幂",tell:18435151234,py:'yangmi'
       },
       {
           name:"赵丽颖",tell:13934154682,py:'zhaoliying'
       },
       {
           name:"隔壁老樊",tell:15734154682,py:'gebilaofan'
       },
       {
           name:"郑恺",tell:15244154682,py:'zhengkai'
       },
       {
           name:"唐嫣",tell:18624154682,py:'tangyan'
       },
       {
           name:"李四",tell:1841154682,py:'李四'
       },
       {
           name:"王五",tell:14234154682,py:'wangwu'
       },
       {
           name:"张三",tell:15634154682,py:'zhangsan'
       },
       {
           name:"孙杨",tell:18234254622,py:'sunyang'
       },
       {
           name:"周伯通",tell:17534154682,py:'zhoubotong'
       },
   ];
   //
   let main =$('main');
   let aside = $('.aside');
   let input = $('input');
   input.on('input',function () {
       let val = $(this).val();
       let newarr = arr.filter(ele=>ele.name.includes(val)||ele.py.includes(val));
       render(newarr);
   });

   render(arr);
        //分类
    function render(arr){
        main.empty();
        aside.empty();
        let person ={

        };

        // 分类
        arr.forEach(ele=>{
            let firstChar=ele.py.charAt(0).toUpperCase();
            if(!person[firstChar]){
                person[firstChar]=[];
            }
            person[firstChar].push(ele);
        });

        //排序
        let keysarr =Object.keys(person).sort();

        let html=``;
        let html1=``;
        for(let i=0;i<keysarr.length;i++){
            let ele = keysarr[i];
            html1+= `<li>${ele}</li>`;
            html+= `
            <section><h2>${ele}</h2>
            `;
            for(let j=0;j<person[ele].length;j++){
                let info= person[ele][j];
                html+= `
                <div><a href="tel:${info.tell}">${info.name}</a></div>
                `
            }
            html+=`</section>`;
        }
        aside.html(html1);
        main.html(html);
    }
});