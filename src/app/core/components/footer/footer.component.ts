import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  footerNavs = [
    {
        label: "Company",
        items: [
            {
                href: 'javascript:void()',
                name: 'Partners'
            },
            {
                href: 'javascript:void()',
                name: 'Blog'
            },
            {
                href: 'javascript:void()',
                name: 'Team'
            },
            {
                href: 'javascript:void()',
                name: 'Careers'
            },
        ],
    },
    {
        label: "Resources",
        items: [
            {
                href: 'javascript:void()',
                name: 'contact'
            },
            {
                href: 'javascript:void()',
                name: 'Support'
            },
            {
                href: 'javascript:void()',
                name: 'Docs'
            },
            {
                href: 'javascript:void()',
                name: 'Pricing'
            },
        ],
    },
    {
        label: "About",
        items: [
            {
                href: 'javascript:void()',
                name: 'Terms'
            },
            {
                href: 'javascript:void()',
                name: 'License'
            },
            {
                href: 'javascript:void()',
                name: 'Privacy'
            },
            {
                href: 'javascript:void()',
                name: 'About US'
            },
        ]
    }
]



email = '';

onSubscribe() {
  // Implement your subscription logic here
}

}
