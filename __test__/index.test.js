const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  test("Test 1", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ id: 1, name: "John Doe" }]);
        done();
      });
  });
});

describe("POST /:param", () => {
  test("Test 1/2", (done) => {
    request(app)
      .post("/1")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ error: false, num: "1" }]);
        done();
      });
  });
});

/**
 * exercice 1
 * @desc Addition
 */
describe("POST /s1/exercice1", () => {
  test("Lettre présente", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: 3, n2: "as" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrez des nombres" }]);
  });

  test("valeur non def", async () => {
    const res = await request(app).post("/s1/exercice1").send({ n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les nombres ne sont pas définis" }]);
  });

  test("n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Addition pas d'erreur", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: -1, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 1 }]);
  });
});

/**
 * exercice 2
 * @desc Soustraction
 */
describe("POST /s1/exercice2", () => {
  test("lettre présente", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: 3, n2: "as" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrez des nombres" }]);
  });

  test("valeur non def", async () => {
    const res = await request(app).post("/s1/exercice2").send({ n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les nombres ne sont pas définis" }]);
  });

  test("n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Soustraction pas d'erreur", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: 1, n2: -2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 3 }]);
  });
});

/**
 * exercice 3
 * @desc Multiplication
 */
describe("POST /s1/exercice3", () => {
  test("Retourne une erreur si lettre présente", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: 3, n2: "as" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrez des nombres" }]);
  });

  test("Retourne une erreur si valeur non def", async () => {
    const res = await request(app).post("/s1/exercice3").send({ n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les nombres ne sont pas définis" }]);
  });

  test("Retourne une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Retourne une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Retourne une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Multiplication pas d'erreur", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: 2, n2: -2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: -4 }]);
  });
});

/**
 * exercice 4
 * @desc Division
 */
describe("POST /s1/exercice4", () => {
  test("Retourne une erreur si lettre présente", async () => {
    const res = await request(app).post("/s1/exercice4").send({n1: 3, n2: "as" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrez des nombres" }]);
  });

  test("Retourne une erreur si valeur non def", async () => {
    const res = await request(app).post("/s1/exercice4").send({ n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les nombres ne sont pas définis" }]);
  });

  test("Retourne une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Retourne une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Retourne une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Test division pas d'erreur", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: 2, n2: -2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: -1 }]);
  });
});

/**
 * exercice 5
 * @desc factorielle
 */
describe("POST /s1/exercice5", () => {
  test("Retourne une erreur si lettre présente", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: "as" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrez des nombres" }]);
  });

  test("Retourne une erreur si valeur non def", async () => {
    const res = await request(app).post("/s1/exercice5").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Le nombre n'est pas défini" }]);
  });

  test("Retourne une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Le nombre n'est pas défini" }]);
  });

  test("Retourne une erreur si chiffre négatif", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: -5 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      { reponse: "Le nombre ne peut pas être négatif" },
    ]);
  });

  test("Factorielle pas d'erreur", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 120 }]);
  });
});

/**
 * exercice 6
 * @desc pair et impair
 */
describe("POST /s1/exercice6", () => {
  test("rRetourne une erreur si lettre présente", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: "as" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrez des nombres" }]);
  });

  test("Retourne une erreur si valeur non def", async () => {
    const res = await request(app).post("/s1/exercice6").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Le nombre n'est pas défini" }]);
  });

  test("Retourne une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Le nombre n'est pas défini" }]);
  });

  test("Le nombre est pair", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: 4 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "pair" }]);
  });

  test("Le nombre est impair", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "impair" }]);
  });
});

/**
 * exercice 7
 * @desc celcius to fahrenheit
 */
describe("POST /s1/exercice7", () => {
  test("Retourne une erreur si lettre présente", async () => {
    const res = await request(app).post("/s1/exercice7").send({ n1: "as" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrez des nombres" }]);
  });

  test("Retourne une erreur si valeur non def", async () => {
    const res = await request(app).post("/s1/exercice7").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Le nombre n'est pas défini" }]);
  });
  test("Retourne une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice7").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Le nombre n'est pas défini" }]);
  });

  test("celcius à fahrenheit pas d'erreur", async () => {
    const res = await request(app).post("/s1/exercice7").send({ n1: 4 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 39.2 }]);
  });
});

/**
 * exercice 8
 * @desc l'aire d'un cercle
 */
describe("POST /s1/exercice8", () => {
  test("Retourne une erreur si lettre présente", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: "as" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrez des nombres" }]);
  });

  test("Retourne une erreur si valeur non def", async () => {
    const res = await request(app).post("/s1/exercice8").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Le nombre n'est pas défini" }]);
  });

  test("Retourne une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Le nombre n'est pas défini" }]);
  });

  test("l'aire d'un cercle pas d'erreur", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: 10 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 314.1592653589793 }]);
  });
});

/**
 * exercice 9
 * @desc palindrome
 */
describe("POST /s1/exercice9", () => {
  test("Retourne une erreur si ce n'est pas une lettre", async () => {
    const res = await request(app).post("/s1/exercice9").send({ n1: "," });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Lettre non valide" }]);
  });

  test("Retourne une erreur si valeur non def", async () => {
    const res = await request(app).post("/s1/exercice9").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Entrée incorecte" }]);
  });

  test("Retourne une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice9").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Entrée incorecte" }]);
  });

  test("False si ce n'est pas un palindrome", async () => {
    const res = await request(app)
      .post("/s1/exercice9")
      .send({ n1: "bonjour" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: false }]);
  });

  test("True si c'est un palindrome", async () => {
    const res = await request(app).post("/s1/exercice9").send({ n1: "kayak" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: true }]);
  });
});

/**
 * exercice 10
 * @desc PGCD
 */
describe("POST /s1/exercice10", () => {
  test("Retourne une erreur si lettre présente", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: "as", n2: 1 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrez des nombres" }]);
  });

  test("Retourne une erreur si valeur non def", async () => {
    const res = await request(app).post("/s1/exercice10").send({ n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrez des nombres" }]);
  });

  test("Retourne une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: null, n2: 3 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Retourne une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Retourne une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("PGCD pas d'erreur", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 10, n2: 10 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 10 }]);
  });
});

/**
 * exercice s2 1
 * 2 façon de tester
 */
describe("POST /s2/exercice1", () => {
  test("Test1 de date il y a dix ans", async () => {
    const res = await request(app).post("/s2/exercice1");

    const today = new Date("1980");
    const expectedDate = new Date(
      today.getFullYear() - 10,
      today.getMonth(),
      today.getDate()
    );
    const responseDate = new Date(res.body[0].reponse);

    expect(responseDate.getFullYear()).toBe(expectedDate.getFullYear());
    expect(responseDate.getMonth()).toBe(expectedDate.getMonth());
    expect(responseDate.getDate()).toBe(expectedDate.getDate());

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  test("Test2 date il y a 10 ans", async () => {
    const res = await request(app).post("/s2/exercice1");
    let date = new Date(res.body[0].reponse);
    let annee = date.getFullYear();
    let mois = ("0" + (date.getMonth() + 1)).slice(-2);
    let jour = ("0" + date.getDate()).slice(-2);

    expect(res.statusCode).toBe(200);
    expect(res.body[0].reponse).toBe(`${annee}-${mois}-${jour}`);
  });
});

/**
 * exercice s2 2
 */
describe("POST /s2/exercice2", () => {
  test("Retourne une erreur si la date est undef", async () => {
    const res = await request(app).post("/s2/exercice2").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Aucune date trouvée" }]);
  });

  test("Retourne une erreur si date est null", async () => {
    const res = await request(app).post("/s2/exercice2").send({ date: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Aucune date trouvée" }]);
  });

  test("Retourne une erreur si lettre présente", async () => {
    const res = await request(app).post("/s2/exercice2").send({ date: "dqj" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Retourne une erreur si date n'est pas valide ", async () => {
    const res = await request(app)
      .post("/s2/exercice2")
      .send({ date: "2023-8-62" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Formater date pas d'erreur", async () => {
    const date = new Date("2018-8-22");
    dateFormater = date.toLocaleDateString("fr-FR");
    const res = await request(app).post("/s2/exercice2").send({ date: date });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: dateFormater }]);
  });
});

/**
 * exercice s2 3
 */
describe("POST /s2/exercice3", () => {
  test("Retourne une erreur si date n'est pas def", async () => {
    const res = await request(app).post("/s2/exercice3").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });

  test("Retourne une erreur si lettre présente", async () => {
    const res = await request(app)
      .post("/s2/exercice3")
      .send({ date1: "dqj", date2: "2023-11-20" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Retourne une erreur si date est null", async () => {
    const res = await request(app)
      .post("/s2/exercice3")
      .send({ date1: "2023-11-20", date2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });

  test("Retourne une erreur si date2 est null", async () => {
    const res = await request(app)
      .post("/s2/exercice3")
      .send({ date1: null, date2: "2023-11-20" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });

  test("Retourne une erreur si date1 n'est pas valide ", async () => {
    const res = await request(app)
      .post("/s2/exercice3")
      .send({ date1: "2023-8-72", date2: "2023-8-30" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Retourne une erreur si date2 n'est pas valide", async () => {
    const res = await request(app)
      .post("/s2/exercice3")
      .send({ date1: "2023-8-22", date2: "2023-8-35" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Retourne une erreur si date1 est supérieur à la date 2 n'est pas valide", async () => {
    const res = await request(app)
      .post("/s2/exercice3")
      .send({ date1: "2023-8-29", date2: "2023-7-30" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      { reponse: "La date 1 doit être inférieur à la date 2" },
    ]);
  });

  test("Différence en jour pas d'erreur ", async () => {
    const date1 = new Date("2023-8-22");
    const date2 = new Date("2023-8-30");
    JourDeDifférence = (date2 - date1) / (1000 * 60 * 60 * 24);
    const res = await request(app)
      .post("/s2/exercice3")
      .send({ date1: date1, date2: date2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      { reponse: "La différence est de : " + JourDeDifférence + " jours" },
    ]);
  });
});

/**
 * exercice s2 4
 */
describe("POST /s2/exercice4", () => {
  test("Retourne une erreur si date n'est pas defini", async () => {
    const res = await request(app).post("/s2/exercice4").send({
      date: null,
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      { reponse: "Veuillez entrer une date et un nombre de jours valides" },
    ]);
  });

  test("Retourne une erreur si date is null", async () => {
    const res = await request(app).post("/s2/exercice4").send({
      date: null,
      nbJours: 10,
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      { reponse: "Veuillez entrer une date et un nombre de jours valides" },
    ]);
  });

  test("Retourne une erreur si nbjours is null", async () => {
    const res = await request(app).post("/s2/exercice4").send({
      date: "2020-11-20",
      nbJours: null,
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      { reponse: "Veuillez entrer une date et un nombre de jours valides" },
    ]);
  });

  test("Retourne une erreur si lettre présente ", async () => {
    const res = await request(app)
      .post("/s2/exercice4")
      .send({ date: "aaaa", nbJours: 10 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      { reponse: "Veuillez entrer une date et un nombre de jours valides" },
    ]);
  });

  test("Retourne une erreur si date n'existe pas ", async () => {
    const res = await request(app)
      .post("/s2/exercice4")
      .send({ date: "2023-13-15", nbJours: 10 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      { reponse: "Veuillez entrer une date et un nombre de jours valides" },
    ]);
  });

  test("Retourne une erreur si jour n'est pas un nombre ", async () => {
    const res = await request(app)
      .post("/s2/exercice4")
      .send({ date: "2023-11-15", nbJours: "salut" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      { reponse: "Veuillez entrer une date et un nombre de jours valides" },
    ]);
  });

  test("Ajouter jours pas d'erreur", async () => {
    const date = new Date("2023-09-03");
    const jours = 10;
    const Copie = new Date(date);
    const dateAttentu = new Date(Copie.setDate(Copie.getDate() + jours))
      .toISOString()
      .split("T")[0];
    const res = await request(app)
      .post("/s2/exercice4")
      .send({ date: date, nbJours: jours });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: dateAttentu }]);
  });
});

/**
 * exercice s2 5
 */
describe("POST /s2/exercice5", () => {
  test("Retourne une erreur si date n'est pas défini", async () => {
    const res = await request(app).post("/s2/exercice5").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une année valide" }]);
  });

  test("Retourne une erreur si date est null", async () => {
    const res = await request(app).post("/s2/exercice5").send({ annee: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une année valide" }]);
  });

  test("Retourne une erreur si lettre présente ", async () => {
    const res = await request(app)
      .post("/s2/exercice5")
      .send({ annee: "salut" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une année valide" }]);
  });

  test("Retourne une erreur si date n'existe pas", async () => {
    const res = await request(app)
      .post("/s2/exercice5")
      .send({ annee: "2023-23-11" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une année valide" }]);
  });

  test("L'année est bisextil", async () => {
    const res = await request(app)
      .post("/s2/exercice5")
      .send({ annee: "2024" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: true }]);
  });

  test("L'année n'est pas bisextil", async () => {
    const res = await request(app)
      .post("/s2/exercice5")
      .send({ annee: "2023" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: false }]);
  });
});

/**
 * exercice s2 6
 */
describe("POST /s2/exercice6", () => {
  test("Retourne une erreur si date n'est pas def", async () => {
    const res = await request(app).post("/s2/exercice7").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Retourne une erreur si date est null", async () => {
    const res = await request(app).post("/s2/exercice6").send({ date: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Retourne une erreur si lettre présente ", async () => {
    const res = await request(app)
      .post("/s2/exercice6")
      .send({ annee: "2023-8-dd22" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Retourne une erreur si date n'existe pas", async () => {
    const res = await request(app)
      .post("/s2/exercice6")
      .send({ date: "2023-80-22" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Premier jour du mois pas d'erreur", async () => {
    const res = await request(app)
      .post("/s2/exercice6")
      .send({ date: "2023-03-11" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "2023-03-01" }]);
  });
});

/**
 * exercice s2 7
 */
describe("POST /s2/exercice7", () => {
  test("Retourne une erreur si date n'est pas def", async () => {
    const res = await request(app).post("/s2/exercice7").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Retourne une erreur si date n'est pas valide", async () => {
    const res = await request(app).post("/s2/exercice7").send({ date: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Retourne une erreur si date n'est pas valide", async () => {
    const res = await request(app)
      .post("/s2/exercice7")
      .send({ annee: "salut" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Retourne une erreur si date n'existe", async () => {
    const res = await request(app)
      .post("/s2/exercice7")
      .send({ date: "2023-8-38" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide" }]);
  });

  test("Dernier jours du mois pas d'erreur", async () => {
    const res = await request(app)
      .post("/s2/exercice7")
      .send({ date: "2023-09-22" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "2023-09-30" }]);
  });
});

/**
 * exercice s2 8
 */
describe("POST /s2/exercice8", () => {
  test("Retourne une erreur si heure pas def", async () => {
    const res = await request(app).post("/s2/exercice8").send({ minutes: 10 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      {
        reponse: "Les heures ou les minutes ne sont pas définis",
      },
    ]);
  });

  test("Retourne une erreur si minutes pas def", async () => {
    const res = await request(app).post("/s2/exercice8").send({ heures: 10 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      {
        reponse: "Les heures ou les minutes ne sont pas définis",
      },
    ]);
  });

  test("Retourne une erreur si heure et minutes pas def", async () => {
    const res = await request(app).post("/s2/exercice8").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      {
        reponse: "Les heures ou les minutes ne sont pas définis",
      },
    ]);
  });

  test("Retourne une erreur si heures  et minutes ne sont pas valide", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ heures: "2023, 8, 22", minutes: "2023-8-22" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      {
        reponse: "Veuillez entrer deux heures et des minutes valides",
      },
    ]);
  });

  test("Retourne une erreur si heures null", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ heures: null, minutes: 10 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      {
        reponse: "Les heures ou les minutes ne sont pas définis",
      },
    ]);
  });

  test("Retourne une erreur si minutes null", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ heures: 10, minutes: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      {
        reponse: "Les heures ou les minutes ne sont pas définis",
      },
    ]);
  });

  test("Retourne une erreur si heures et minutes null", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ heures: null, minutes: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      {
        reponse: "Les heures ou les minutes ne sont pas définis",
      },
    ]);
  });
  
  test("Retourne une erreur si heures négatif", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ heures: -12, minutes: 30 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer deux heures et des minutes valides" }]);
  });

  test("Retourne une erreur si minutes négatif", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ heures: 12, minutes: -30 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer deux heures et des minutes valides" }]);
  });

  test("formater durée pas d'erreur", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ heures: 12, minutes: 30 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "12:30" }]);
  });
});

/**
 * exercice s2 9
 */
describe("POST /s2/exercice9", () => {
  test("Retourne une erreur si aucune dates ne sont def", async () => {
    const res = await request(app).post("/s2/exercice9").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });

  test("Retourne une erreur si debut1 n'est pas def", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut2: "2013-11-26",
      fin1: "2013-11-26",
      fin2: "2013-11-26",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });


  test("Retourne une erreur si debut2 n'est pas def", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "2013-11-26",
      fin1: "2013-11-26",
      fin2: "2013-11-26",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });

  test("Retourne une erreur si fin1 n'est pas def", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "2013-11-26",
      debut2: "2013-11-26",
      fin2: "2013-11-26",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });

  test("Retourne une erreur si fin2 n'est pas def", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "2013-11-26",
      debut2: "2013-11-26",
      fin1: "2013-11-26",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });

  test("Retourne une erreur dates n'est pas def et au moins un null", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut2: null,
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });

  test("Retourne une erreur début 1 null", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: null,
      debut2: "2013-11-26",
      fin1: "2013-11-26",
      fin2: "2013-11-26",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });

  test("Retourne une erreur début 2 null", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "2013-11-26",
      debut2: null,
      fin1: "2013-11-26",
      fin2: "2013-11-26",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });

  test("Retourne une erreur fin 1 null", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "2013-11-26",
      debut2: "2013-11-26",
      fin1: null,
      fin2: "2013-11-26",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });

  test("Retourne une erreur fin 2 null", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "2013-11-26",
      debut2: "2013-11-26",
      fin1: "2013-11-26",
      fin2: null,
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Les dates ne sont pas définis" }]);
  });

  test("Retourne une erreur lettre présente dans une date", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "salut",
      debut2: "2023-8-24",
      fin1: "2023-8-22",
      fin2: "2023-8-24",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer des dates valide" }]);
  });

  test("Retourne une erreur une date n'existe pas", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "2023-18-22",
      debut2: "2023-8-24",
      fin1: "2023-8-22",
      fin2: "2023-8-24",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer des dates valide" }]);
  });

  test("chevauchement de date pas d'erreur et vrai", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "2023-8-22",
      debut2: "2023-8-24",
      fin1: "2023-8-22",
      fin2: "2023-8-24",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: true }]);
  });

  test("chevauchement de date pas d'erreur et false", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "2023-8-26",
      debut2: "2023-8-28",
      fin1: "2023-8-21",
      fin2: "2023-8-23",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: false }]);
  });
});

/**
 * exercice s2 10
 */
describe("POST /s2/exercice10", () => {
  test("Retourne une erreur si aucune date n'est def", async () => {
    const res = await request(app).post("/s2/exercice10").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      {
        reponse: "Veuillez entrer une date de naissance valide",
      },
    ]);
  });

  test("Retourne une erreur si date est null", async () => {
    const res = await request(app)
      .post("/s2/exercice10")
      .send({ dateDeNaissance: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      {
        reponse: "Veuillez entrer une date de naissance valide",
      },
    ]);
  });

  test("Retourne une erreur si lettre présente", async () => {
    const res = await request(app)
      .post("/s2/exercice10")
      .send({ dateDeNaissance: "salut" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      { reponse: "Veuillez entrer une date de naissance valide" },
    ]);
  });

  test("Retourne une erreur si date n'existe pas", async () => {
    const res = await request(app)
      .post("/s2/exercice10")
      .send({ dateDeNaissance: "2012-14-20" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([
      { reponse: "Veuillez entrer une date de naissance valide" },
    ]);
  });

  test("Calculer l'age pas d'erreur", async () => {
    const res = await request(app)
      .post("/s2/exercice10")
      .send({ dateDeNaissance: "2012-11-20" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 11 }]);
  });
});
