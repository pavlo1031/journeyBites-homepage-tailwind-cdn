import { ArticleData } from "@/model/ArticleData";

export interface PopularArticleData extends ArticleData {
  locked?: boolean,
}

export const data: PopularArticleData[] = [
    {
      id: '001',
      title: '探索歐洲之美：浪漫之都巴黎',
      description: '在遊歷歐洲時,巴黎總是一個令人心馳神往的目的地。這座浪漫之都以其迷',
      imageURL: 'https://s3-alpha-sig.figma.com/img/cd91/bdb8/ec2ed4f848d4f3f35408468107d52220?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qeK5PihScyf7tKyO6B259EphFdbSIE7Ae-WUHSV2suX3IAEP9UXz1IcvKWI2rNxRXMTPOZnbIparedEnvqginWcHVt9XpNYlJPBLdgB6jfhb40VeCqoZMtREcWlfmAsaT62QdIzpd3z6NbyLikaiixL4zYaYfSRppYNDHqEJcLQ2Kjwex5Yww3JET1~U0iAHvdN~b7cZxwZ9hDU4xS4SRhIs-ur2G6PkFZAxQZxoCzk4GZvx05xCis6cOzsMrE4tBH-yBbnqfdwUKwDguSUIl5sM-kWnXEEreX9oITT9MtAe8gNBre-cWWOYly4rPL39MlPV~C57GFUHdBV-ADVpLg__',
      authorId: 'alexandra_smith',
      authorName: 'Alexandra Smith',
      authorPicURL: 'https://s3-alpha-sig.figma.com/img/1d98/34aa/1bbed8f28e0d4ba2f5d0cb1ee0dce7b9?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FXV3Bwo5SN15klHXWHAtURTlio4OHLlQi4G0r6wylVklI1Dn8AuUQjCETLj90WqETdSg47fZbvCGM6I9C3CrU3FQ2mTqb8kyPrN2eer36Tlqz1PYg5C6SF7MDbTnwctFdOh-BoRzWZQUulw6mUj45CRluN7-TGRQazKBozYo0-HMwv-~VW71etszieG2nZ~Fv6u-8EiJ6ou1jiJs~wiQViSNn-uI8Ue1OpKEPBxT6Vnf332oUYifOiTEWZF2mDlfanj4qEPJVr4WSBsu2XEu72B6UfZ3yvgBMSK7B1JZkOmcQSKwmXS4YuBJqtm~KJOa-QwFAu0CzXCAqZckb0VXQw__',
      created: '2024/3/23',
      viewCount: 1002,
      likeCount: 223,
      savedCount: 0,
    },
    {
      id: '002',
      title: '漫遊京都,感受日本古都風情',
      description: '踏入京都,彷彿進入了一個穿越時光的世界。在金閣寺的金碧輝煌中,感受著古...',
      imageURL: 'https://s3-alpha-sig.figma.com/img/ead2/c3d2/943d12e1503d839bd207799e55cdb295?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HTQ7-bCn56qiFMzHUaLffF-kMxFRbDB-ho4wlB0JRS5Ggo69ZUtG2-X8OozL1i4CfHpySPgOLtzZ7G4Xje9hTzbYR~ynExNYNfQ3yVprtwFLW2re5aUdKPwcdLmpZD53OUorGFLF158UHWn8sPSPLpOVevyOaWAU1MHqidPMQazh8QgXWtBcjq~XrysChgyWrhULcjH4M9gFyNiszBZFOkeD17Kyy406NU8AI~xuuUVLMeyLR1PUSnZX9lFtZC4Ht5YsSvy03BNYzKO86BW3FHZSHzw~g85thZ4vb4ah9mlAkcaEqnjgcfAvjLii6hsPpDv-dQqtOLP-zkyW69s8-Q__',
      authorId: 'alexandra_smith',
      authorName: 'Alexandra Smith',
      authorPicURL: 'https://s3-alpha-sig.figma.com/img/1d98/34aa/1bbed8f28e0d4ba2f5d0cb1ee0dce7b9?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FXV3Bwo5SN15klHXWHAtURTlio4OHLlQi4G0r6wylVklI1Dn8AuUQjCETLj90WqETdSg47fZbvCGM6I9C3CrU3FQ2mTqb8kyPrN2eer36Tlqz1PYg5C6SF7MDbTnwctFdOh-BoRzWZQUulw6mUj45CRluN7-TGRQazKBozYo0-HMwv-~VW71etszieG2nZ~Fv6u-8EiJ6ou1jiJs~wiQViSNn-uI8Ue1OpKEPBxT6Vnf332oUYifOiTEWZF2mDlfanj4qEPJVr4WSBsu2XEu72B6UfZ3yvgBMSK7B1JZkOmcQSKwmXS4YuBJqtm~KJOa-QwFAu0CzXCAqZckb0VXQw__',
      created: '2024/3/23',
      viewCount: 1002,
      likeCount: 223,
      savedCount: 0,
    },
    {
      id: '003',
      title: '大蘋果探險:紐約的多元魅力',
      description: '過紐約的街頭,彷彿置身於一座不夜城。在時代廣場的霓虹燈海中,感受著現代...',
      imageURL: 'https://s3-alpha-sig.figma.com/img/e459/6e6f/c8877ce4de229e8ffe2bea970e413a6f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oEX2pmFrtDG4TwyXj97NBm25avFeXttt9LNRx93R-4kIFBHzqj2AqD0BiWlSxf9lVVvy41FDWiei5xvKX-uHQC0BTewojjBvyDxmM67oelczY9ZskUJGgmUXiRmXo6aXD2FuEskuNbHsmZaVtJdBdm8ruHDhWjhbk4LEN-73iaARSSHZZnXqKtfeIRWNz1Ghol9OynJfDfC3SdjJRrpkC1xpxXjSO63EOe3IIANLXiTmxaf5-xMfrBfqSVH9cM0MyuZ5eU551cLomIw1Y-PsJudCh~Dh~6aZSJmBCK-zTeW66Sih0HOsPfuc8u3cw6Mr-OptPYERw9bXMI7pjx1fIw__',
      authorId: 'alexandra_smith',
      authorName: 'Alexandra Smith',
      authorPicURL: 'https://s3-alpha-sig.figma.com/img/1d98/34aa/1bbed8f28e0d4ba2f5d0cb1ee0dce7b9?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FXV3Bwo5SN15klHXWHAtURTlio4OHLlQi4G0r6wylVklI1Dn8AuUQjCETLj90WqETdSg47fZbvCGM6I9C3CrU3FQ2mTqb8kyPrN2eer36Tlqz1PYg5C6SF7MDbTnwctFdOh-BoRzWZQUulw6mUj45CRluN7-TGRQazKBozYo0-HMwv-~VW71etszieG2nZ~Fv6u-8EiJ6ou1jiJs~wiQViSNn-uI8Ue1OpKEPBxT6Vnf332oUYifOiTEWZF2mDlfanj4qEPJVr4WSBsu2XEu72B6UfZ3yvgBMSK7B1JZkOmcQSKwmXS4YuBJqtm~KJOa-QwFAu0CzXCAqZckb0VXQw__',
      created: '2024/3/23',
      viewCount: 1002,
      likeCount: 223,
      savedCount: 0,
    },
    {
      id: '004',
      title: '歐洲漫遊:穿越小鎮、感受...',
      description: '步在歐洲的小鎮中,彷彿進入了一幅寧靜而美麗的畫卷。在意大利的托斯卡納...',
      imageURL: 'https://s3-alpha-sig.figma.com/img/2e08/1da9/92fbd9d48550895b5687726294dafa77?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bfyriyUixJ-7mpJOPIPIQ-FjUqsPiUkM7jscA8V5huVrXBi~joOxPFYbbko55xEcyT9fkUfJ55HHjJokFGrMxww~upyIPCUctL9dcjhsTCxER6gAorJOQvnRj3giDSfGCRTKx5Vq~ju-PRhSYE7Qw47Ts4gF3-VEjU39iiEtjj2e-i1dlrvXJ--1dQP2MaFMSGyRJ-RMW3~XKCxWisiZb~WLedN5QTw~ddhArY~p0qxdW3psrTiD7zQ2t3W~eYku8KFjF0Tvi2SvPMksam0UkBYYR6v1PQy8CNwhQngkKTacM~wLj8I4djLa2Xu5OLcXEFwkWWNeSfpQK5rZS5AvTQ__',
      authorId: 'alexandra_smith',
      authorName: 'Alexandra Smith',
      authorPicURL: 'https://s3-alpha-sig.figma.com/img/1d98/34aa/1bbed8f28e0d4ba2f5d0cb1ee0dce7b9?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FXV3Bwo5SN15klHXWHAtURTlio4OHLlQi4G0r6wylVklI1Dn8AuUQjCETLj90WqETdSg47fZbvCGM6I9C3CrU3FQ2mTqb8kyPrN2eer36Tlqz1PYg5C6SF7MDbTnwctFdOh-BoRzWZQUulw6mUj45CRluN7-TGRQazKBozYo0-HMwv-~VW71etszieG2nZ~Fv6u-8EiJ6ou1jiJs~wiQViSNn-uI8Ue1OpKEPBxT6Vnf332oUYifOiTEWZF2mDlfanj4qEPJVr4WSBsu2XEu72B6UfZ3yvgBMSK7B1JZkOmcQSKwmXS4YuBJqtm~KJOa-QwFAu0CzXCAqZckb0VXQw__',
      created: '2024/3/23',
      viewCount: 1002,
      likeCount: 223,
      savedCount: 0,
    },
];