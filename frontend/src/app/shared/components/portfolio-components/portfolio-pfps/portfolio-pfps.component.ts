import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PortfolioShowcase } from '../../../../models/PortfolioShowcase';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { PortfolioShowcaseCard } from '../../../../models/PortfolioShowcase';
import { LoaderComponent } from '../../common/loader/loader.component';
import { PortfolioImageLoaderComponent } from "../../common/portfolio-image-loader/portfolio-image-loader.component";
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../common/modal/modal.component';


@Component({
  selector: 'app-portfolio-pfps',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgOptimizedImage, LoaderComponent, PortfolioImageLoaderComponent],
  templateUrl: './portfolio-pfps.component.html',
  styleUrls: ['./portfolio-pfps.component.css'],
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
export class PortfolioPFPsComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  portfolioPFPs: PortfolioShowcase | undefined | null;
  uploadedImageNames: Set<string> = new Set();
  activeFilter: string = 'All PFPs';

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPortfolioShowcase();
  }

  private getPortfolioShowcase(): void {
    const savedShowcase = localStorage.getItem('portfolioPfps');
    if (savedShowcase) {
      this.portfolioPFPs = JSON.parse(savedShowcase);
    } else {
      this.portfolioPFPs = {
        "id": 1,
        "subTitle": "Emotes / Sub Badges",
        "description": "Enhance your stream’s look with unique banner emotes that bring character and charm.",
        "filterOptions": [
          "All PFPs",
          "Static",
          "Animated"
        ],
        "showCaseCardList": [
          {
            "id": 1,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-portfolio-4.jpg",
            "altText": "Static pfp",
            "title": "PFP",
            "description": "Static"
          },
          {
            "id": 2,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-portfolio-1.jpg",
            "altText": "Static pfp",
            "title": "PFP",
            "description": "Static"
          },
          {
            "id": 3,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-portfolio-3.jpg",
            "altText": "Static pfp",
            "title": "PFP",
            "description": "Static"
          },
          {
            "id": 4,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-portfolio-2.jpg",
            "altText": "Static pfp",
            "title": "PFP",
            "description": "Static"
          },
          {
            "id": 5,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-2d-full-body-model-portfolio-1.gif",
            "altText": "Animated pfp",
            "title": "PFP",
            "description": "Animated"
          },
          {
            "id": 6,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-2d-full-body-model-portfolio-2.gif",
            "altText": "Animated pfp",
            "title": "PFP",
            "description": "Animated"
          },
          {
            "id": 7,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-2d-full-body-model-portfolio-3.gif",
            "altText": "Animated pfp",
            "title": "PFP",
            "description": "Animated"
          },
          {
            "id": 8,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-pfp-portfolio-6.gif",
            "altText": "Animated pfp",
            "title": "PFP",
            "description": "Animated"
          },
          {
            "id": 9,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-pfp-portfolio-5.gif",
            "altText": "3D pfp",
            "title": "PFP",
            "description": "3D"
          },
          {
            "id": 10,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-pfp-portfolio-4.gif",
            "altText": "3D pfp",
            "title": "PFP",
            "description": "3D"
          },
          {
            "id": 11,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-pfp-portfolio-3.gif",
            "altText": "3D pfp",
            "title": "PFP",
            "description": "3D"
          },
          {
            "id": 12,
            "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-pfp-portfolio-2.gif",
            "altText": "3D pfp",
            "title": "PFP",
            "description": "3D"
          }
        ]
      };
    }
    this.filteredCardList = this.portfolioPFPs?.showCaseCardList;
  }


  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All PFPs') {
      this.filteredCardList = this.portfolioPFPs?.showCaseCardList;
    } else if (option === 'Animated') {
      this.filteredCardList = this.portfolioPFPs?.showCaseCardList?.filter(
        card => card.description === 'Animated' || card.description === '3D'
      );
    } else {
      this.filteredCardList = this.portfolioPFPs?.showCaseCardList?.filter(
        card => card.description === option
      );
    }
  }

  onDeleteImage(index: number): void {
    this.portfolioPFPs?.showCaseCardList?.splice(index, 1);
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

          this.portfolioPFPs?.showCaseCardList?.push(newCard);
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
    return Math.max(0, ...(this.portfolioPFPs?.showCaseCardList?.map(c => c.id!) || [])) + 1;
  }
  private savePortfolioShowcase(): void {
    if (this.portfolioPFPs) {
      localStorage.setItem('portfolioPfps', JSON.stringify(this.portfolioPFPs));
    }
  }

}
