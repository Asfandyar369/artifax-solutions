import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogHubItem, BlogHubSection } from '../../../../interface/BlogHubSection';

@Component({
  selector: 'app-blog-hub-section',
  standalone: true,
  imports: [NgbModule, NgIf, NgFor, RouterModule],
  templateUrl: './blog-hub-section.component.html',
  styleUrls: ['./blog-hub-section.component.css']
})
export class BlogHubSectionComponent implements OnInit {
  blogHubSection: BlogHubSection | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getBlogHubSection();
  }

  private getBlogHubSection(): void {
    this.blogHubSection = {
      "id": 1,
      "subTitle": "Streamer Station",
      "title": "Discover Insights: Our Blog Hub",
      "description": "Explore a treasure trove of blogs covering diverse topics.",
      "buttonText": "Read More",
      "buttonUrl": "/blogs",
      "showNavigationArrows": false,
      "showNavigationIndicators": false,
      "itemList": [
        {
          "id": 1,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/colorful-smartphone-interface-with-icons-and-text-300x169.png",
          "altText": "Colorful smartphone interface with icons and text",
          "title": "The Rise of Interactive Elements in Stream Graphics:",
          "content": "In the ever-evolving landscape of online streaming, interactivity has become a crucial element for engaging and retaining viewers. Streamers now incorporate interactive custom streamer graphics, such as polls, games, and live chat integrations, to create immersive experiences. As technology advances, the future promises even more sophisticated elements like augmented reality...",
          "linkUrl": "/the-rise-of-interactive-elements-in-stream-graphics"
        },
        {
          "id": 2,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/video-editing-300x169.png",
          "altText": "Video editing",
          "title": "Behind the Scenes: The Art of Crafting Custom",
          "content": "In the competitive world of online streaming, capturing and retaining viewer attention is essential. One effective way streamers achieve this is through custom attention-grabbing animated alerts, which notify streamers of interactions like new followers and donations, while also entertaining the audience. This blog delves into the art of creating these...",
          "linkUrl": "/behind-the-scenes-the-art-of-crafting-custom-animated-alerts-for-streamers"
        },
        {
          "id": 3,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/a-well-lit-modern-workspace-with-devices-displaying-digital-content-300x169.png",
          "altText": "A well-lit modern workspace with devices displaying digital content.",
          "title": "Optimizing Stream Graphics for Different Platforms: A Comprehensive",
          "content": "In the bustling world of online streaming, standing out amidst the sea of content is crucial for attracting and retaining viewers. One key aspect that streamers often overlook is the optimization of their streamer graphics for different platforms. Whether streaming on Twitch, YouTube, Facebook Gaming, or Mixer, each platform has...",
          "linkUrl": "/optimizing-stream-graphics-for-different-platforms-a-comprehensive-guide"
        },
        {
          "id": 4,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/man-watching-computer-1-300x169.png",
          "altText": "man watching computer",
          "title": "Streamers’ Guide to Choosing the Right Animation Styles",
          "content": "Animation styles are a powerful tool for streamers looking to establish a distinctive brand identity and captivate their audience. From subtle motion graphics to dynamic transitions, the right animation style can elevate a streamer's content and leave a lasting impression on viewers. In this comprehensive guide, we'll explore the factors...",
          "linkUrl": "/streamers-guide-to-choosing-the-right-animation-styles-for-their-brand"
        },
        {
          "id": 5,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/a-futuristic-helmeted-character-in-a-cyberpunk-themed-room-1-300x169.png",
          "altText": "A futuristic helmeted character in a cyberpunk-themed room.",
          "title": "The Future of Stream Branding: Predictions and Insights",
          "content": "In our exploration of the future of stream branding, we delve into groundbreaking trends poised to reshape the streaming landscape. From immersive experiences leveraging AR and VR technologies to AI-driven personalization, streamers are on the brink of a branding revolution. Cross-platform consistency, interactive widgets, and real-time data visualization will be...",
          "linkUrl": "/the-future-of-stream-branding-predictions-and-insights"
        },
        {
          "id": 6,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/Overlay-graphic-300x169.png",
          "altText": "Overlay graphic.",
          "title": "Exploring The Impact Of High-Quality Overlays On Viewer",
          "content": "In the competitive world of online streaming, the quality of overlays can significantly impact viewer engagement. This blog explores the benefits of using high-quality overlays to enhance your stream's visual appeal and create a more immersive experience for your audience. Learn how to select the right overlays to complement your content and...",
          "linkUrl": "/exploring-the-impact-of-high-quality-graphics-on-viewer-engagement"
        },
        {
          "id": 7,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/over-the-shoulder-view-of-person-editing-video-300x169.png",
          "altText": "Over-the-shoulder view of person editing video",
          "title": "The Evolution of Stream Graphics: From Basic to High-Tech",
          "content": "Stream graphics have evolved significantly over the years, moving from basic overlays to sophisticated, high-tech designs. This blog takes you on a journey through the evolution of stream graphics, highlighting key milestones and the technologies that have shaped the industry. Discover how streamers are now using advanced tools and techniques to create...",
          "linkUrl": "/seo-strategies-for-streamers-boosting-visibility-with-graphics-and-animation"
        },
        {
          "id": 8,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/stylish-banner-300x169.png",
          "altText": "Stylish banner",
          "title": "Best Practices for Creating Consistent Stream Branding",
          "content": "Consistent stream branding is crucial for establishing a strong and recognizable presence in the streaming community. This blog outlines best practices for creating cohesive branding across all your stream elements, including overlays, alerts, and transitions. Learn how to develop a unique brand identity that resonates with your audience and sets you apart from the competition...",
          "linkUrl": "/the-evolution-of-animation-in-streaming-what-streamers-need-to-know"
        },
        {
          "id": 9,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/colorful-digital-graphics-on-a-screen-300x169.png",
          "altText": "Colorful digital graphics on a screen.",
          "title": "The Importance of Visual Storytelling in Streaming",
          "content": "Visual storytelling is a powerful tool for streamers looking to connect with their audience on a deeper level. This blog explores the importance of using visuals to tell compelling stories during your streams, from creating engaging thumbnails to designing immersive stream overlays. Learn how to leverage visual storytelling techniques to enhance your...",
          "linkUrl": "/top-10-graphics-trends-for-streamers"
        }
      ]
    };
  }

  chunk(arr: BlogHubItem[], chunkSize: number): BlogHubItem[][] {
    const chunks: BlogHubItem[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  trackByFn(index: number, item: BlogHubItem): number {
    return item.id!;
  }

  trackBySlide(index: number, slideItems: BlogHubItem[]): number {
    return index;
  }
}
