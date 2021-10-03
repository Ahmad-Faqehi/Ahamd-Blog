import Api from "./Api";

export default {
    
    all(){
        return Api.get('posts')
    },
    post(id){
        return Api.get('post/'+id)
    },
    postTag(cat){
        return Api.get('category/'+cat)
    },
    category(){
        return Api.get('categories')
    },create(post){
        return Api.post("post",post)
    }
}