{
    "microservices architecture" : "",
"communication in btw each microservice " : "by API calls" ,
" now we ll see how react ui will make connections with other services " : {

}






}









there are 2 ways of rendering external / api dat There are two ways of rendering external or api data onto the ui. First way is as soon as the page loads , And make the api call, and then wait for 500 milliseconds. If 500 milliseconds for the data, for  the api response data, that much of the time and then render the ui 



Second approach is Load The js file and render load the server load the Js file and everything, and then render, and then call the api.

 And then then drag in Second approach is more Preferably or preferred because react in render cycle quite efficient and fast. So we dont mind rendering twice And the ux firstly, we the second method is preferred because the ux is good. We have the things are already loaded and there are placeholders in place. And We are only loading the actual api data. Again. And the US experience is better than the second method. But in the first method, it's blank until 5 milliseconds, and then suddenly everything is rendered. So that is my second approach, is Prefer
 
 
  But how do you achieve the second purpose and react? 
  
  
  It is through use effect. So, in To use effect is nothing but another javascript function that is provided by react, which carries out specific task. And it's a hook
  
   So use effect is a function, and it takes into arguments. First is a callback function, and 2nd is an array.
   
    So when is this? What's the purpose of this use effect? Is or when will the this particular function ,is called or callback function is called 
    
    
    At what point in the render cycle is it called? At what point in the render cycle is the user effect or the callback function inside the user effect called.
    
     It is called after the component. J-6 is rendered, and the component is rendered. That means rendered.
     
     
     Didn't So this is why This use effect has to be Use to achieve the Things that you want to do after you enter the component. For example, this api call that I want to do after I enter the component, right? So I want to the api call after I rent the component. So this is why we have to do use the use effect for the Through some side effect. 



Shimmer effect It's a better UX to show coming. to But especially the home page or the large pages compared to An order or a Shimmer effect ui so that better you just create a shimmer ui to to replicate the Whatever you are is going to be there and then give it gray color and style it in gray, and then make it shimmer, and then Show until Main data is loaded. I think you can use react suspense also in place of it. React suspense to. display the shumer ui Shimmer UI Until the data is loaded .


