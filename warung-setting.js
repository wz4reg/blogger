!function(d){d.getElementById("submit").addEventListener("click",function(){function e(e){return d.getElementById(e).checked}var t=e("relatedposts"),n=(r="relatedpostsnum",d.getElementById(r).value),l=e("relatedpoststhumb"),o=e("sliderloop");function s(e,t){return e=!0===e?t+" : true,\n":t+" : false,\n"}var r,u="<script>\nvar waRungSetting = {\n",t=s(t,"relatedPosts");r="jumlahRelatedPosts",n=""!=(n=n)?r+" : "+n+",\n":r+" : 1,\n",u+=t+n+s(l,"relatedPostsThumb")+s(o,"sliderLoop"),u+="};\n<\/script>",d.getElementById("htmloutput").value=u})}(document);