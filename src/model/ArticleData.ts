export interface ArticleData {
    id: string,
    imageURL?: string,
    imageType?: string,
    title: string,
    description: string,
    authorId: string,
    authorName: string,
    authorPicURL?: string,
    created: string,
    viewCount: number,
    likeCount: number,
    savedCount: number,
}