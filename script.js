function Book(){
    this.Name = name;
    this.Author = author;
    this.Publication = publication;
    this.YearOfPublication = yearOfPublication;
    this.NumberOfCopies = numberOfCopies;
    this.Id = id;
    this.CountPage = countPage;
    this.getCountPage = function(){
        return this.CountPage;
    };
};

function Journal(){
    this.Id = id;
    this.CountPage = countPage;
    this.Publication = publication;
    this.ReleaseYear = releaseYear;
    this.ReleaseNumber = releaseNumber;

    if(this.CountPage<=32){return this.CountPage && this.ReleaseYear;
    } else {
        alert('maximum of 32 pages')
    };
};