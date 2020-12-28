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

  postResq: any = null

  postId: any = null

  posArray: any = null

  valueProgress: any = ""

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
    if (document.getElementById("navToolbar").classList.contains("showToolbar") == false) {
      document.getElementById("navToolbar").classList.remove("hideToolbar")
      document.getElementById("navToolbar").classList.add("showToolbar")
    }
    this.postResq = location.search
    console.log(this.postResq)
    console.log(this.postResq.slice(0, 4))
    
    if (this.postResq != "") {
      if (this.postResq.slice(0, 4) == "?id=") {
        console.log('Sintaxe correta')
        this.postId = this.postResq.slice(4)
        console.log(this.postId)
        if (this.blogService.bdLoaded) {
          console.log('blogService.bdLoaded is true')

          this.findPosArray()

          if (this.posArray != null) {
            this.blogService.readData(this.posArray)
            this.findCopyPost()
            this.findAuthor()
            this.valueProgress = 100

          } else {
            console.log('ID não encontrado')
            console.log('Retornando a Tutoriais')
            this.router.navigate(['tutorials'])
            window.scrollTo(0, 0)      
          }
      
        } else {
          console.log('blogService.bdLoaded is false')
          this.getData()
          this.valueProgress = 100

        }
      } else {
        console.log('Sintaxe incorreta')
        console.log('Retornando a Tutoriais')
        this.router.navigate(['tutorials'])
        window.scrollTo(0, 0)  
      }
    } else {
      if (this.blogService.bdLoaded) {
        this.findPosArray()
        this.findCopyPost()
        this.findAuthor()
        this.valueProgress = 100

      } else {
        console.log('Retornando a Tutoriais')
        this.router.navigate(['tutorials'])
        window.scrollTo(0, 0)  
      }
    }
  }

  cancel(): void {
    console.log('Retornando a Tutorials')
    // this.snackBarService.showMassage('Voltando')
    this.router.navigate(['tutorials'])
    window.scrollTo(0, 0)
  }

  share(): void {
    console.log('Compartilhando o post')
    this.snackBarService.showMassage('Funcionamento não disponível, botão em construção!')
    // this.router.navigate(['blog'])
    // window.scrollTo(0, 0)
  }

  getData(): void {
    this.databaseService.getTutorials().subscribe(response => {
      this.blogService.BLOG_DATA_SERVICE = response.tutorials.slice()
      console.log(this.blogService.BLOG_DATA_SERVICE)
      this.blogService.bdLoaded = true
      console.log(this.blogService.bdLoaded)

      console.log('Banco de dados JSON Services importado para Services Service')

      this.findPosArray()

      if (this.posArray != null) {
        this.blogService.readData(this.posArray)
        this.findCopyPost()
        this.findAuthor()

      } else {
        console.log('ID não encontrado')
        console.log('Retornando a Tutoriais')
        this.router.navigate(['tutorials'])
        window.scrollTo(0, 0)      
      }

    })
  }

  findPosArray(): void {
    console.log("Procurando posição no array do id: " + this.postId)

    for (var i = 0; i < this.blogService.BLOG_DATA_SERVICE.length; i++) {
      if (this.blogService.BLOG_DATA_SERVICE[i].id == this.postId) {
        this.posArray = i
        console.log(this.posArray)
        break
      }
    }
  }

  findCopyPost(): void {

    this.storeData = this.blogService.BLOG_READ_UPDATE
    this.storeData = JSON.parse(JSON.stringify(this.storeData))
    this.storeData.paragraf1 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf1)
    this.storeData.paragraf2 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf2)
    this.storeData.paragraf3 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf3)
    this.storeData.paragraf4 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf4)
    this.storeData.paragraf5 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf5)

    this.photoBase64 = this.storeData.imageTitle

    this.title.setTitle('HenCan | Tutoriais - Nº ' + this.storeData.id + ' - ' + this.storeData.title);
    // document.getElementById('paragraf1').innerHTML = this.storeData.paragraf1
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
