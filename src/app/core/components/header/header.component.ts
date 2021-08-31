import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	items: MenuItem[];

	constructor() {
		this.items = [
			{ label: 'Imageboard', url: '/' },
			{
				label: 'Posts',
				url: '/posts',
			},
		];
	}

	ngOnInit(): void {}
}
