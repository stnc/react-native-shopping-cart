import { MediaConfig } from '../../constants/clientConfig';

sizeControl = (props) => {
    let imagesource;
    if (props._embedded["wp:featuredmedia"]["0"].media_details.sizes.thumbnail) {
        imagesource = props._embedded["wp:featuredmedia"]["0"].media_details.sizes.thumbnail.source_url;
    }
    if (props._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium) {
        imagesource = props._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium.source_url;
    } else {
        imagesource = props._embedded["wp:featuredmedia"]["0"].source_url;
    }
    return imagesource;
}


export const authorInfo = (props) => {
    let author;
    if (props._embedded.author["0"]) {
        author = props._embedded.author["0"];
    }
    return author;
}

export const commentCount = (props) => {
    let replies;
    if (props._embedded.replies) {
        if (props._embedded.replies["0"].length > 0) {
            //  replies =  Object.keys(props._embedded.replies["0"]).length 
            replies = props._embedded.replies["0"].length
        }
        else {
            replies = 0;
        }
        return replies;
    }
}

export const commentList = (props) => {
    let replies;
    if (props._embedded.replies) {
        if (props._embedded.replies["0"].length > 0) {
            //  replies =  Object.keys(props._embedded.replies["0"]).length 
            replies = props._embedded.replies["0"]
        }
        else {
            replies = null;
        }
        return replies;
    }
}

export const likeCount = (props) => {
    let _liked=0;
    if (props._liked) {
        _liked = props._liked[0]
    }
    return _liked;
}


export const fetchMediaInfo = (props) => {

    let imagource;
    if (props.featured_media == 0) {
        imagource = MediaConfig.defaultPostsImage;
    }
    else {
        imagource = sizeControl(props);
    }
    return imagource
}

/// FETCh

