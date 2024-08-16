import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PortfolioShowcase } from '../../../../models/PortfolioShowcase';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { PortfolioShowcaseCard } from '../../../../models/PortfolioShowcase';
import { PortfolioImageLoaderComponent } from "../../common/portfolio-image-loader/portfolio-image-loader.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ModalComponent } from '../../common/modal/modal.component';

@Component({
  selector: 'app-portfolio-emotes',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgOptimizedImage, PortfolioImageLoaderComponent],
  templateUrl: './portfolio-emotes.component.html',
  styleUrl: './portfolio-emotes.component.css',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class PortfolioEmotesComponent implements OnInit {
  portfolioEmote: PortfolioShowcase | undefined | null;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  activeFilter: string = 'All Banner';
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  uploadedImageNames: Set<string> = new Set();


  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPortfolioEmote();
  }

  private getPortfolioEmote(): void {
    const savedShowcase = localStorage.getItem('portfolioEmote');
    if (savedShowcase) {
      this.portfolioEmote = JSON.parse(savedShowcase);
    } else {
    this.portfolioEmote = {
      "id": 1,
      "subTitle": "Banner",
      "description": "Upgrade your stream with our eye-catching banners.",
      "filterOptions": [
        "All Banner",
        "Static",
        "Animated"
      ],
      "showCaseCardList": [
        {
          "id": 1,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-6.jpg",
          "altText": "6 static emotes",
          "title": "Static",
          "description": "Emotes"
        },
        {
          "id": 2,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-5.jpg",
          "altText": "6 static emotes",
          "title": "Static",
          "description": "Emotes"
        },
        {
          "id": 3,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-4.jpg",
          "altText": "6 static emotes",
          "title": "Static",
          "description": "Emotes"
        },
        {
          "id": 4,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-3.jpg",
          "altText": "5 Static emotes",
          "title": "Static",
          "description": "Emotes"
        },
        {
          "id": 5,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-2.jpg",
          "altText": "4 static emotes",
          "title": "Static",
          "description": "Emotes"
        },
        {
          "id": 6,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-1.jpg",
          "altText": "3 static emotes",
          "title": "Static",
          "description": "Emotes"
        },
        {
          "id": 7,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-emotes-portfolio-5.gif",
          "altText": "5 animated emotes",
          "title": "Animated",
          "description": "Emotes"
        },
        {
          "id": 8,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-emotes-portfolio-4.gif",
          "altText": "6 animated emotes",
          "title": "Animated",
          "description": "Emotes"
        },
        {
          "id": 9,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-emotes-portfolio-3.gif",
          "altText": "4 animated emotes",
          "title": "Animated",
          "description": "Emotes"
        },
        {
          "id": 10,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-emotes-portfolio-2.gif",
          "altText": "6 animated emotes",
          "title": "Animated",
          "description": "Emotes"
        },
        {
          "id": 11,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-emotes-portfolio-1.gif",
          "altText": "6 animated emotes",
          "title": "Animated",
          "description": "Emotes"
        },
        {
          "id": 12,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-emotes-portfolio-6.gif",
          "altText": "5 animated emotes",
          "title": "Animated",
          "description": "Emotes"
        }
      ]
    };
  }
    this.filteredCardList = this.portfolioEmote?.showCaseCardList;
  }

  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All Banner') {
      this.filteredCardList = this.portfolioEmote?.showCaseCardList;
    } else {
      debugger
      this.filteredCardList = this.portfolioEmote?.showCaseCardList
        ?.filter(
          (card: PortfolioShowcaseCard) => card.title === option
        );
    }
  }
  onDeleteImage(index: number): void {
    this.portfolioEmote?.showCaseCardList?.splice(index, 1);
    this.savePortfolioShowcase(); // Save after deletion
  }

  openDeleteModal(index: number) {
    const modalRef = this.modalService.open(ModalComponent);

    modalRef.componentInstance.onConfirm.subscribe((password: string) => {
      if (this.validatePassword(password)) {
        this.onDeleteImage(index);
        this.toastr.success('Card deleted successfully!', 'Toastr Success');
      } else {
        this.toastr.error('Invalid password. Please try again.', 'Toastr Error');
      }
    });
  }

  validatePassword(password: string): boolean {
    // Replace this with actual password validation logic
    return password === '@123';
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click(); // Programmatically click the hidden file input
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, "");

      if (this.uploadedImageNames.has(fileNameWithoutExtension)) {
        this.toastr.info('File already uploaded!', 'Toastr Info');
        return;
      }

      this.uploadedImageNames.add(fileNameWithoutExtension);

      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const img = new Image();
        img.onload = () => {

          const newCard: PortfolioShowcaseCard = {
            id: this.generateId(),
            imageUrl: URL.createObjectURL(file),
            altText: file.name,
            title: fileNameWithoutExtension,
            description: "Static",
          };

          this.portfolioEmote?.showCaseCardList?.push(newCard);
          this.filterCards(this.activeFilter);
          this.savePortfolioShowcase();
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }



  private generateId(): number {
    // Generate a unique ID for the new card (adjust logic as needed)
    return Math.max(0, ...(this.portfolioEmote?.showCaseCardList?.map(c => c.id!) || [])) + 1;
  }
  private savePortfolioShowcase(): void {
    if (this.portfolioEmote) {
      localStorage.setItem('portfolioEmote', JSON.stringify(this.portfolioEmote));
    }
  }
}
