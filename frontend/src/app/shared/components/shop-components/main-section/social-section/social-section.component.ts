import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SocialSection } from '../../../../../models/SocialSection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-section',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './social-section.component.html',
  styleUrl: './social-section.component.css'
})
export class SocialSectionComponent implements OnInit {
  socialSection: SocialSection | undefined | null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getSocialSection();
  }

  private getSocialSection(): void {
    this.socialSection = {
      "id": 1,
      "title": "Artifax Solutions",
      "subTitle": "Lets Get Social",
      "buttonText": "Follow on Instagram",
      "description": "Stay in touch and follow us for the latest updates on all things streaming!",
      "buttonIconSvg": "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
      "profileImageUrl": "images/Black-and-Light-Blue.png",
      "profileImageAltText": "streamer_station",
      "postList": [
        {
          "id": 1,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/sb-instagram-feed-images/420525995_351298611187783_1055000207477806632_nlow.jpg",
          "altText": "Attention all streamers! Your streaming destiny awaits, and it starts with a captivating design. Streamer Station is your partner in creating a visually stunning stream, ensuring every chapter is a masterpiece. Picture a streaming journey where every visual element captivates your audience and keeps them coming back for more. Ready to start writing your streaming success story? Begin with Streamer Station by your side. #StreamerStation #StreamDestiny #CaptivatingDesign #StreamSuccess"
        },
        {
          "id": 2,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/sb-instagram-feed-images/420534675_351298004521177_1526289919299915483_nlow.jpg",
          "altText": "Calling all streamers! Tired of battling design dragons alone? Streamer Station is here to join forces with you, providing top-notch overlays, emotes, and graphics that will make your stream shine. Imagine creating a streaming world where every detail is captivating, and your audience can't look away. It's time to conquer those design dragons! Let Streamer Station be your trusty sidekick on this epic journey! #StreamerStation #DesignSidekick #ConquerTheDragons #StreamerSuccess"
        },
        {
          "id": 3,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/sb-instagram-feed-images/420537220_351296291188015_2179499168297907298_nlow.jpg",
          "altText": "Attention all streamers, dreamers, and creators! Your vision, your stream, your brand... Streamer Station is your gateway to turning those dreams into a reality! Our expert designers craft pixel-perfect magic. Imagine having a stream that's not just memorable, but unforgettable. Your potential is limitless when you unleash the power of our designs. The time is now! Dive into the world of Streamer Station and let's bring your dreams to life. #StreamerStation #DesignDreams #StreamWithStyle #UnleashPotential"
        },
        {
          "id": 4,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/sb-instagram-feed-images/420535915_351285061189138_7881782978224209923_nlow.jpg",
          "altText": "Calling all streamers! If you're ready to take your streaming game to the next level... Streamer Station is here to be your creative partner, your sidekick, your secret weapon. Get ready for something remarkable! Imagine having professionally designed overlays, emotes, and graphics that truly captivate your audience and set you apart. Don't miss out on this opportunity. Join Streamer Station now and embark on a stunning journey to streamer stardom! #StreamerStation #CreativeCompanions #StreamWithStyle #StreamerSuccess"
        },
        {
          "id": 5,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/sb-instagram-feed-images/419225587_347615511556093_1463573936473273858_nlow.jpg",
          "altText": "Calling all streamers! Are your streams missing that visual spark? We've got the solution. Streamer Station is your creative powerhouse, ready to turn your dull streams into vibrant, eye-catching visual experiences that'll set you apart. Imagine the transformation – your streams will shine like never before, leaving your audience mesmerized. Don't wait to bring your streams to life. Join Streamer Station now and embark on an incredible visual journey! #StreamerStation #VisualExperiences #ElevateYourStreams #StreamerSuccess"
        },
        {
          "id": 6,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/sb-instagram-feed-images/418879789_345789898405321_2771831282460059882_nlow.jpg",
          "altText": "Step into the spotlight and let Streamer Station be your gateway to a world of professional designs that will transform your streaming experience. Elevate your content with stunning graphics, captivating overlays, and a touch of creative magic that will leave your audience in awe. unlock the full potential of your stream with Streamer Station's cutting-edge design tools and templates, tailored to suit every streaming style. From sleek overlays to eye-catching alerts, we've got your back! #CreativeMagic #DazzleYourAudience #StreamingRevolution #ContentCreation"
        },
        {
          "id": 7,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/sb-instagram-feed-images/416161907_345773908406920_618659250135595516_nlow.jpg",
          "altText": "Hey, streamers! Ever dreamt of transforming your stream into a visual masterpiece? Streamer Station is your gateway to making those dreams a reality with stunning visuals that will keep your viewers spellbound. Picture a stream that leaves your audience in awe, making them appreciate your hard work even more. Ready to bring your stream's dreams to life? Join Streamer Station today and let your viewers thank you for it! #StreamerStation #VisualDreams #StunningStream #ViewersLoveIt"
        },
        {
          "id": 8,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/sb-instagram-feed-images/416115513_345762358408075_1971403171426162324_nlow.jpg",
          "altText": "Attention, streamers! It's time to unlock the true potential of your stream. Streamer Station's designs are more than visuals; they're the superpower that sets your stream apart. Imagine a stream where every element is a supercharged force of attraction, keeping your viewers engaged and excited. Ready to infuse your stream with superpowers? Join Streamer Station and level up your streaming game! #StreamerStation #StreamSuperpowers #CaptivatingDesign #StreamSuccess"
        }
      ],
      "socialMediaLinks": [
        {
          "id": 1,
          "url": "https://www.facebook.com/yourpage",
          "icon": "bi bi-facebook",
          "platform": "Facebook"
        },
        {
          "id": 2,
          "url": "https://twitter.com/yourprofile",
          "icon": "bi bi-twitter",
          "platform": "Twitter"
        },
        {
          "id": 3,
          "url": "https://www.instagram.com/yourprofile",
          "icon": "bi bi-instagram",
          "platform": "Instagram"
        },
        {
          "id": 4,
          "url": "https://www.twitch.tv/yourchannel",
          "icon": "bi bi-twitch",
          "platform": "Twitch"
        },
        {
          "id": 5,
          "url": "https://www.tiktok.com/@yourprofile",
          "icon": "bi bi-tiktok",
          "platform": "TikTok"
        },
        {
          "id": 6,
          "url": "https://www.behance.net/yourprofile",
          "icon": "bi bi-behance",
          "platform": "Behance"
        }
      ]
    };
  }
  public openInstagram() {
    this.router.navigate(['/home']);
  }
}
