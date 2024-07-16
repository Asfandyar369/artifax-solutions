import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { NgbModule, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { BannerSectionComponent } from "../../components/banner-section/banner-section.component";
import { StreamerStationSectionComponent } from "../../components/streamer-station-section/streamer-station-section.component";
import { WhatWeCanDoForYouSectionComponent } from "../../components/what-we-can-do-for-you-section/what-we-can-do-for-you-section.component";
import { AcquireSectionComponent } from "../../components/acquire-section/acquire-section.component";
import { CounterCardSectionComponent } from "../../components/counter-card-section/counter-card-section.component";
import { ExpertsSectionComponent } from "../../components/experts-section/experts-section.component";
import { ShopNowSectionComponent } from "../../components/shop-now-section/shop-now-section.component";
import { BlogHubSectionComponent } from "../../components/blog-hub-section/blog-hub-section.component";
import { SocialSectionComponent } from "../../components/social-section/social-section.component";
import { StreamingCreativitySectionComponent } from "../../components/streaming-creativity-section/streaming-creativity-section.component";
import { BuildStreamSectionComponent } from "../../components/build-stream-section/build-stream-section.component";
import { FooterSectionComponent } from "../../components/footer-section/footer-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgbModule, NgFor, BannerSectionComponent, StreamerStationSectionComponent, WhatWeCanDoForYouSectionComponent, AcquireSectionComponent, CounterCardSectionComponent, ExpertsSectionComponent, ShopNowSectionComponent, BlogHubSectionComponent, SocialSectionComponent, StreamingCreativitySectionComponent, BuildStreamSectionComponent, FooterSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // slides: any[]
  // currentIndex: number = 0;
  // constructor() {
  //   this.slides = [
  //     {
  //       img: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/colorful-smartphone-interface-with-icons-and-text-300x169.png',
  //       title: 'The Rise of Interactive Elements in Stream Graphics:',
  //       text: 'In the ever-evolving landscape of online streaming, interactivity has become a crucial element for engaging and retaining viewers. Streamers now incorporate interactive custom streamer graphics, such as polls, games, and live chat integrations, to create immersive experiences. As technology advances, the future promises even more sophisticated elements like augmented reality...'
  //     },
  //     {
  //       img: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/video-editing-300x169.png',
  //       title: 'Behind the Scenes: The Art of Crafting Custom',
  //       text: 'In the competitive world of online streaming, capturing and retaining viewer attention is essential. One effective way streamers achieve this is through custom attention-grabbing animated alerts, which notify streamers of interactions like new followers and donations, while also entertaining the audience. This blog delves into the art of creating these...'
  //     },
  //     {
  //       img: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/a-well-lit-modern-workspace-with-devices-displaying-digital-content-300x169.png',
  //       title: 'Optimizing Stream Graphics for Different Platforms: A Comprehensive',
  //       text: 'In the bustling world of online streaming, standing out amidst the sea of content is crucial for attracting and retaining viewers. One key aspect that streamers often overlook is the optimization of their streamer graphics for different platforms. Whether streaming on Twitch, YouTube, Facebook Gaming, or Mixer, each platform has...'
  //     },
  //     {
  //       img: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/man-watching-computer-1-300x169.png',
  //       title: 'Streamers’ Guide to Choosing the Right Animation Styles',
  //       text: "Animation styles are a powerful tool for streamers looking to establish a distinctive brand identity and captivate their audience. From subtle motion graphics to dynamic transitions, the right animation style can elevate a streamer's content and leave a lasting impression on viewers.In this comprehensive guide, we'll explore the factors..."
  //     },
  //     {
  //       img: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/a-futuristic-helmeted-character-in-a-cyberpunk-themed-room-1-300x169.png',
  //       title: 'The Future of Stream Branding: Predictions and Insights',
  //       text: "In our exploration of the future of stream branding, we delve into groundbreaking trends poised to reshape the streaming landscape. From immersive experiences leveraging AR and VR technologies to AI-driven personalization, streamers are on the brink of a branding revolution. Cross-platform consistency, interactive widgets, and real-time data visualization will be..."
  //     },
  //     {
  //       img: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/Overlay-graphic-300x169.png',
  //       title: 'Exploring The Impact Of High-Quality Graphics On Viewer',
  //       text: "In the dynamic world of online content creation, captivating visuals have emerged as a cornerstone of viewer engagement. High-quality streamer graphics not only draw viewers in with eye-catching visuals but also enhance the overall immersive experience, making content more enjoyable and professional. From vibrant colors and engaging streamer animations to..."
  //     },
  //     {
  //       img: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/A-streamer-ranking-graph-growing-up-on-number-1-300x169.png',
  //       title: 'SEO Strategies for Streamers: Boosting Visibility with Graphics',
  //       text: "In the competitive world of online streaming, standing out is essential. Leveraging SEO strategies, particularly through optimized graphics and animation, can significantly boost visibility. This blog explores how streamers can enhance their SEO efforts by using descriptive filenames and alt text, incorporating relevant keywords, and creating engaging visuals. Additionally, we'll..."
  //     },
  //     {
  //       img: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/man-wearing-vr-300x169.png',
  //       title: 'The Evolution of Animation in Streaming: What Streamers',
  //       text: "Animation has become an indispensable tool for streamers looking to enhance their content and captivate audiences in the competitive world of online streaming. From subtle transitions to flashy animated alerts for streamers. Animation adds depth, personality, and interactivity to streams, elevating the viewer experience to new heights. In this blog..."
  //     },
  //     {
  //       img: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/05/virtual-reality-charachter-300x169.png',
  //       title: 'Top 10 Graphics Trends For Streamers',
  //       text: "In the dynamic realm of online streaming, staying ahead of the curve is paramount for capturing and retaining audience attention. As visual storytelling continuously evolves, streamers are constantly seeking innovative ways to enhance their content. From Twitch overlays to engaging streamer animations, here are the top 10 graphics trends that..."
  //     },
  //   ]
  // }
}
