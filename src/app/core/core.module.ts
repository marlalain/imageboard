import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule, MenubarModule],
	exports: [HeaderComponent],
})
export class CoreModule {}
