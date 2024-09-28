import { Component, OnInit } from "@angular/core";
import noUiSlider from "nouislider";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  active = 1;
  active1 = 1;
  active2 = 1;
  model = {
    left: true,
    middle: false,
    right: false,
  };

  focus;
  focus1;
  constructor() {}

  ngOnInit() {
    this.getCoreCompetences();
  }

  ngAfterViewInit() {
    var slider = document.getElementById("input-slider");

    noUiSlider.create(slider, {
      start: 40,
      connect: [true, false],
      range: {
        min: 0,
        max: 100,
      },
    });

    var slider2 = document.getElementById("input-slider-range");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
  }

  getCoreCompetences(): any[] {
    return [
      {
        name:'Primary Skills',
        primarySkills: [
          {
            displayName: "Angular",
            skill: "angular",
            img: "./assets/img/skills/angular.jpg",
          },
          {
            displayName: "Java Springboot",
            skill: "javaspringboot",
            img: "./assets/img/skills/javaspringboot.png",
          },
          {
            displayName: "ASP .Net Web API",
            skill: "aspwebapi",
            img: "./assets/img/skills/aspwebapi.jpg",
          },
          {
            displayName: "Node JS",
            skill: "nodejs",
            img: "./assets/img/skills/nodejs.svg",
          },
        ],
      },
      {
        name:'Database Skills',
        dbSkills: [
          {
            displayName: "Mongo DB",
            skill: "mongodb",
            img: "./assets/img/skills/mongodb.png",
          },
          {
            displayName: "Oracle SQL",
            skill: "oracledb",
            img: "./assets/img/skills/oracledb.png",
          },
          {
            displayName: "MS SQL Server",
            skill: "mssqlserver",
            img: "./assets/img/skills/mssqlserver.png",
          }
        ],
      },
      {
        name:'Other Skills',
        otherSkills: [
          {
            displayName: "JIRA Ticketing Tool",
            skill: "jira",
            img: "./assets/img/skills/jira.png",
          },
          {
            displayName: "SonarQube Analysis",
            skill: "sonarqube",
            img: "./assets/img/skills/sonarqube.svg",
          },
          {
            displayName: "Linux",
            skill: "linux",
            img: "./assets/img/skills/linux.png",
          },
          {
            displayName: "Postman",
            skill: "postman",
            img: "./assets/img/skills/postman.png",
          },
        ],
      },
    ];
  }

  get getPrimarySkills(): any[] {
    return this.getCoreCompetences()[0].primarySkills;
  }
  get getdbSkills(): any[] {
    return this.getCoreCompetences()[1].dbSkills;
  }
  get getOtherSkills(): any[] {
    return this.getCoreCompetences()[2].otherSkills;
  }
}
