export default class PopupGenerator {
    public static createRootContainer(comment: any, index: number): Node {
        let newElement: HTMLDivElement = document.createElement('div');
        newElement.id = `${index}`;
        newElement.className = "snippet-container";
        
        let rootCommentContainer: HTMLDivElement = document.createElement('div');
        rootCommentContainer.id = `${index}`;
        rootCommentContainer.className = 'root-comment-container';
    
        let rootCommentAuthor: HTMLDivElement = document.createElement('div');
        rootCommentAuthor.className = 'root-comment-author-name';
        rootCommentAuthor.innerText += comment.rootAuthorName;
        
        let rootCommentText: HTMLDivElement = document.createElement('div');
        rootCommentText.className = 'root-comment-text';
        rootCommentText.innerHTML = comment.comment;
        rootCommentAuthor.appendChild(rootCommentText);
        
        let rootCommentAuthorImageContainer: HTMLDivElement = document.createElement('div');
        let rootCommentAuthorImage: HTMLImageElement = document.createElement('img');
        rootCommentAuthorImage.className = 'root-comment-author-image author-image';
        rootCommentAuthorImage.src = comment.rootAuthorImage;
    
        rootCommentContainer.appendChild(rootCommentAuthorImageContainer).appendChild(rootCommentAuthorImage);
        rootCommentContainer.appendChild(rootCommentAuthor);
    
        newElement.appendChild(rootCommentContainer);
    
        return newElement; 
    }

    public static createChildContainer(reply: any, index: number): Node {
        let newElement: HTMLDivElement = document.createElement('div');
        newElement.id = `${index}`;
        newElement.className = "replies-container";
        
        let replyCommentContainer: HTMLDivElement = document.createElement('div');
        replyCommentContainer.id = `${index}`;
        replyCommentContainer.className = 'reply-comment-container';
    
        let replyCommentAuthor: HTMLDivElement = document.createElement('div');
        replyCommentAuthor.className = 'reply-comment-author-name';
        replyCommentAuthor.innerText += reply.authorName;
        
        let replyCommentText: HTMLDivElement = document.createElement('div');
        replyCommentText.className = 'reply-comment-text';
        replyCommentText.innerHTML = reply.comment;
        replyCommentAuthor.appendChild(replyCommentText);
        
        let replyCommentAuthorImageContainer: HTMLDivElement = document.createElement('div');
        let replyCommentAuthorImage: HTMLImageElement = document.createElement('img');
        replyCommentAuthorImage.className = 'reply-comment-author-image author-image';
        replyCommentAuthorImage.src = reply.authorImage;
    
        replyCommentContainer.appendChild(replyCommentAuthorImageContainer).appendChild(replyCommentAuthorImage);
        replyCommentContainer.appendChild(replyCommentAuthor);
    
        newElement.appendChild(replyCommentContainer);
    
        return newElement; 
    }
}