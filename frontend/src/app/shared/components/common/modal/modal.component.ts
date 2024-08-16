import { Component, EventEmitter, inject, OnInit, Output, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule],
  template: `
    <ng-template #content let-modal>
      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Profile update</h4>
        <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
      </div>
      <div class="modal-body">
      <form novalidate>
  <div class="mb-3" style="display: none;">
    <label for="hidden-username">Username</label>
    <input
      type="text"
      autocomplete="username"
      id="hidden-username"
      name="hidden-username"
      aria-hidden="true"
    />
  </div>
  <div class="mb-3">
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      class="form-control"
      placeholder="Enter your password"
      [(ngModel)]="password"
      autocomplete="new-password"
    />
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" [disabled]="!password" (click)="confirm(modal)">Delete</button>
      </div>
    </ng-template>
  `,
  styles: [`
    .modal-body { margin-top: 10px; }
    /* Component-specific styles to override global .btn-danger */
    .btn-danger{
      background-color: red !important;
    }

  `]
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('content') content!: TemplateRef<any>;
  private modalService = inject(NgbModal);
  password: string = '';
  closeResult = '';
  @Output() onConfirm = new EventEmitter<string>();
  @Output() onCancel = new EventEmitter<void>();

  ngAfterViewInit(): void {
    this.open(this.content);
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }


  confirm(modal: any) {
    this.onConfirm.emit(this.password);
    modal.close();
  }

  cancel(modal: any) {
    this.onCancel.emit();
    modal.dismiss();
  }
}
