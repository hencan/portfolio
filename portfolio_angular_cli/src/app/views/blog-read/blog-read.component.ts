import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { BlogService } from '../../services/blog/blog.service';
import { MembersService } from '../../services/members/members.service';
import { DatabaseService } from '../../services/database/database.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-blog-read',
  templateUrl: './blog-read.component.html',
  styleUrls: ['./blog-read.component.css']
})
export class BlogReadComponent implements OnInit {

  storeData: any = { id: '', imageTitle: '', title: '', subtitle: '', categories: '', paragraf1: '', paragraf2: '', paragraf3: '', paragraf4: '', paragraf5: '', situation: '', status: "", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '', date: '', author: '' }

  photoBase64: any = ""

  authorData: any = ""

  constructor(
    private router: Router,
    private title: Title,
    private snackBarService: SnackbarService,
    private blogService: BlogService,
    private membersService: MembersService,
    private databaseService: DatabaseService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    if (document.getElementById("header").classList.contains("showToolbar") == false) {
      document.getElementById("header").classList.remove("hideToolbar")
      document.getElementById("header").classList.add("showToolbar")
    }
    if (this.blogService.bdLoaded) {

      this.storeData = this.blogService.BLOG_READ_UPDATE
      this.storeData = JSON.parse(JSON.stringify(this.storeData))
      this.storeData.paragraf1 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf1)
      this.storeData.paragraf2 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf2)
      this.storeData.paragraf3 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf3)
      this.storeData.paragraf4 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf4)
      this.storeData.paragraf5 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf5)

      this.photoBase64 = this.storeData.imageTitle

      this.title.setTitle('HenCan | Artigos - Post ' + this.storeData.id + ' - ' + this.storeData.title);
      // document.getElementById('paragraf1').innerHTML = this.storeData.paragraf1
      this.findAuthor()
    } else {
      console.log('Retornando a Artigos')
      this.router.navigate(['articles'])
      window.scrollTo(0, 0)
    }
    // this.disqusCode()
  }

  cancel(): void {
    console.log('Retornando a Artigos')
    // this.snackBarService.showMassage('Voltando')
    this.router.navigate(['articles'])
    window.scrollTo(0, 0)
  }

  share(): void {
    console.log('Compartilhando o post')
    this.snackBarService.showMassage('Funcionamento não disponível, botão em construção!')
    // this.router.navigate(['blog'])
    // window.scrollTo(0, 0)
  }

  findAuthor(): void {
    if (this.membersService.bdLoaded == false) {
      this.databaseService.getUsers().subscribe(response => {
        this.authorData = response.users.slice()
        for (let i = 0; i < this.membersService.MEMBERS_DATA_SERVICE.length; i++) {
          this.membersService.MEMBERS_DATA_SERVICE[0].password = "acesso restrito"
        }
        this.copyData()
      })
    } else {
      this.authorData = this.membersService.MEMBERS_DATA_SERVICE
      this.copyData()
    }
  }

  copyData(): void {
    for (var i = 0; i < this.authorData.length; i++) {
      if (this.storeData.author === this.authorData[i].fname) {
        this.authorData = this.authorData[i]
      } else {
        console.log('Autor não encontrado')
      }
    }
  }


/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
// disqusCode() { // DON'T EDIT BELOW THIS LINE
// var d = document, s = d.createElement('script');
// s.src = 'https://hencanportifolio.disqus.com/embed.js';
// s.setAttribute('data-timestamp', new Date().toString());
// (d.head || d.body).appendChild(s);
// }

}
