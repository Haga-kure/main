const express = require("express");

const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

const port = 8000;

const bodyParser = require("body-parser");

const jsonParser = (require = bodyParser.json());

const articles = [
  {
    id: "1",
    imageUrl: "https://loremflickr.com/640/360",
    articleId: 0,
    name: "Duis mollit velit dolore laborum quis duis exercitation sint Lorem.",
    description:
      "Eu nisi officia nisi magna pariatur nulla nisi ipsum id nostrud. Proident incididunt deserunt deserunt consectetur magna irure ad enim occaecat.",
    text: "Dolor laborum magna incididunt consectetur. Id reprehenderit consequat cillum culpa nisi labore in occaecat enim Lorem dolor duis incididunt proident incididunt. Nostrud nostrud aliquip voluptate incididunt dolor culpa ullamco nisi voluptate. Exercitation tempor non occaecat excepteur veniam.\nEiusmod ullamco reprehenderit id cupidatat Lorem voluptate do. Commodo dolor esse cupidatat irure amet minim duis ullamco commodo ex laborum enim id. Commodo magna et commodo. Occaecat qui id aliqua occaecat ullamco non sit duis duis reprehenderit Lorem. Velit fugiat culpa tempor esse elit.\nId eu amet reprehenderit aute velit excepteur velit veniam sit esse dolore. Velit cupidatat sunt veniam. Commodo laboris commodo deserunt mollit elit sunt in eiusmod. Fugiat consequat eu laboris cupidatat ea laboris sit ipsum ex do nisi est. Labore sint culpa pariatur ea qui ipsum ipsum ad cupidatat irure occaecat amet consectetur. Excepteur cupidatat occaecat occaecat.\nNisi proident irure incididunt sunt veniam ea nisi magna est ut dolor et laborum qui. Magna non ea tempor velit cupidatat deserunt et aute nisi sunt laborum laborum culpa. Exercitation ea non eiusmod. Sit fugiat dolore Lorem dolor in commodo aliqua ea aute incididunt proident. Occaecat quis eiusmod eu irure voluptate nulla veniam veniam deserunt ullamco labore aliquip laboris laborum esse. Do irure enim cupidatat nisi veniam anim fugiat ea tempor ullamco tempor elit mollit labore. Ex qui quis laboris est tempor qui proident nulla sunt anim incididunt in. Eiusmod est exercitation consectetur duis deserunt elit culpa reprehenderit cillum est nisi do dolor veniam.\nReprehenderit sit reprehenderit nulla. Nulla reprehenderit exercitation eu et anim anim in pariatur elit pariatur nisi Lorem aliquip qui. Aute aliqua amet nostrud proident sit ex Lorem ad dolore. Deserunt officia ad voluptate adipisicing do occaecat ex do aliqua ad id.\nIpsum do cupidatat labore. Cillum id eiusmod aliqua eiusmod minim dolor anim voluptate dolor cupidatat occaecat. Consectetur amet incididunt deserunt in excepteur veniam. Cillum irure aliqua reprehenderit eu enim irure est elit sunt esse do. Ullamco laborum incididunt amet excepteur laborum occaecat do commodo. Cillum do magna ad labore ipsum consectetur enim. Laboris commodo occaecat cillum ipsum in mollit aute Lorem labore eu.\nAmet ea ex commodo aute ipsum do do aute laborum enim commodo officia anim. Ad veniam enim mollit occaecat commodo velit Lorem quis est est reprehenderit ut duis adipisicing. Consectetur in duis esse aliquip officia sint. Enim consectetur magna laboris anim incididunt ex ut elit dolore exercitation ea do irure sunt.\nIpsum proident voluptate excepteur quis enim sit occaecat ea quis ut consectetur. Elit quis reprehenderit laboris reprehenderit enim ipsum culpa fugiat aliquip. Reprehenderit cillum eiusmod laboris qui laboris do. Culpa ipsum tempor reprehenderit laboris. Aute commodo nulla est tempor occaecat enim culpa cillum dolore ex officia magna officia esse nulla. Mollit dolore occaecat consequat quis et.\nCupidatat veniam dolore Lorem id in consequat ut enim adipisicing sit nostrud dolor enim. Est ipsum duis laboris sit excepteur cillum est laborum. Occaecat laborum do dolore labore incididunt. Laborum amet fugiat duis aliqua in. Sint do veniam do ut.\nPariatur laborum incididunt reprehenderit. Anim est aliquip pariatur sint reprehenderit do sint irure minim. Labore sunt ullamco sit eu occaecat laborum proident dolor. Adipisicing cupidatat dolore ex ea tempor cillum reprehenderit sit esse sunt. Aliqua consectetur ipsum consectetur adipisicing deserunt tempor fugiat laboris irure enim aliqua id. Ex eiusmod anim tempor. Ullamco elit laborum cupidatat irure eu Lorem ad minim est anim nulla non laborum.",
  },
  {
    id: "2",
    imageUrl: "https://loremflickr.com/1080/720",
    articleId: 1,
    name: "Sit elit magna cillum sunt ex non voluptate elit eiusmod quis qui aliquip consectetur.",
    description:
      "Nulla ipsum nulla ut nulla ea ad cillum occaecat amet magna qui excepteur in. Fugiat non esse velit laboris amet sunt sit sunt excepteur laboris fugiat.",
    text: "Laboris sint commodo tempor nisi minim ad sit incididunt tempor adipisicing nostrud labore mollit elit. Incididunt cillum nisi cupidatat quis velit officia esse. Dolore nulla quis voluptate. Minim culpa mollit quis labore amet nisi minim dolor velit reprehenderit aute officia ipsum commodo occaecat. Ex sint ea anim id. Ex cillum ut amet exercitation cupidatat. Dolore nisi quis eu magna eiusmod amet do culpa quis proident amet exercitation reprehenderit laboris officia. In labore dolore nisi ullamco deserunt fugiat veniam dolor qui culpa.\nUllamco non veniam ea ex commodo magna aute officia laboris culpa. Duis mollit adipisicing proident voluptate nisi reprehenderit excepteur aliquip laboris occaecat pariatur dolor laborum. Culpa cupidatat mollit irure duis cupidatat id cupidatat tempor anim. Lorem reprehenderit elit exercitation. Aute ipsum excepteur adipisicing proident in veniam.\nProident cillum velit commodo cupidatat ullamco aliquip mollit. Sunt commodo enim nulla incididunt ipsum voluptate. Do aliqua culpa veniam exercitation dolore. Voluptate duis occaecat nulla. Adipisicing occaecat dolor tempor consectetur proident. Cupidatat enim laborum aute nisi irure proident Lorem ut.\nAliqua adipisicing officia aliqua. Nostrud reprehenderit velit non incididunt dolore id nulla. Sint voluptate fugiat cillum id officia ipsum. Tempor anim quis veniam duis dolore pariatur in culpa Lorem ea.\nOfficia anim excepteur pariatur sint. Et aute aliqua nulla non sint cillum. Elit elit et ut irure velit proident non excepteur dolor ad. Adipisicing cupidatat eiusmod eu dolore ad reprehenderit occaecat labore cupidatat ullamco nostrud. Consectetur consectetur fugiat consequat commodo reprehenderit adipisicing aliquip veniam id veniam sit voluptate laborum dolore. Anim dolore minim esse culpa mollit veniam. Non cupidatat nulla officia qui ea ex.\nEt est officia Lorem deserunt veniam do dolor nisi cillum cupidatat labore. Sunt nisi ullamco occaecat duis esse commodo irure tempor voluptate quis reprehenderit incididunt non qui veniam. Fugiat labore dolor ut est minim est eu non proident quis laboris anim ipsum voluptate. Sunt ex id aliquip aute. Do ad adipisicing fugiat sint dolor est deserunt dolore exercitation in exercitation. Laborum Lorem ea exercitation veniam. Irure ipsum voluptate tempor laboris fugiat ex non sunt.\nOfficia esse duis irure aute in non elit laboris. Tempor labore sunt culpa ullamco esse exercitation eiusmod. Sit id sint amet. Mollit ipsum ipsum pariatur sint ea officia adipisicing laborum. Cillum dolore fugiat Lorem incididunt cupidatat quis non exercitation laborum exercitation. Proident nostrud ullamco ex irure. Enim minim Lorem officia consequat veniam sunt dolore. Consectetur incididunt veniam adipisicing culpa consequat.\nCupidatat deserunt nulla voluptate. Nulla et et aute laboris deserunt commodo irure do elit cillum ex ea velit cupidatat. Dolore consectetur sint dolore. Dolore officia nulla adipisicing sit minim elit consequat eu sit do sit. Eiusmod reprehenderit id esse anim ea dolore duis cupidatat eu aute ad quis nisi pariatur ullamco.\nConsectetur Lorem et anim adipisicing reprehenderit tempor dolore sit eiusmod pariatur sit. Et sit ut esse aute esse laboris consectetur sunt ex voluptate est dolor non labore. Ad veniam sunt amet ipsum Lorem dolore exercitation sint aliquip tempor amet qui. Culpa sunt minim aliquip duis voluptate. Incididunt dolore ut ad enim enim incididunt labore excepteur proident commodo commodo nisi.\nIpsum non et do duis esse adipisicing ex. Ullamco veniam adipisicing magna adipisicing exercitation voluptate do amet velit amet elit et sint commodo. Est esse ea deserunt sint aute nisi commodo proident ad. Minim sint mollit aliqua. Lorem ex id ex ex deserunt velit eu nisi officia minim quis ipsum est excepteur cupidatat. Dolor elit consectetur duis nisi sit minim amet dolor ea laboris do. Amet id consectetur dolor sit mollit dolor tempor aliqua do qui aliquip eu et tempor aute. Minim aliquip qui pariatur sint sit laboris non.",
  },
  {
    id: "3",
    imageUrl: "https://loremflickr.com/1080/1080",
    articleId: 2,
    name: "Consectetur consectetur consectetur incididunt laborum commodo officia ut voluptate quis commodo sit id irure.",
    description:
      "Est pariatur aliquip irure minim elit labore ut nostrud fugiat sint ad. Tempor in elit amet tempor laborum laboris occaecat pariatur deserunt proident in ea occaecat non esse.",
    text: "Irure est aliqua duis cillum non sit adipisicing ut commodo ut non labore commodo. Aliquip sit reprehenderit ipsum commodo sit tempor ullamco sunt voluptate tempor esse est. Eiusmod duis aliquip nulla reprehenderit. Dolore do aliquip ex amet nulla nisi est sit deserunt est et. Pariatur in exercitation labore qui amet cillum enim cupidatat adipisicing cupidatat.\nCulpa magna ad elit non qui ea velit tempor. Et eu exercitation nisi culpa laborum aute reprehenderit sint fugiat enim duis. Ipsum reprehenderit voluptate adipisicing ut et irure nostrud eiusmod laboris quis. Nisi excepteur aute officia ipsum cupidatat et consectetur ullamco amet magna tempor sint. Exercitation amet quis enim. Proident enim sit velit. Dolor reprehenderit nulla est in.\nEt eiusmod aliqua ut dolor eu do voluptate do aute dolore. Nisi eiusmod voluptate eiusmod. Commodo non excepteur tempor mollit labore. Culpa aliqua deserunt dolor culpa irure reprehenderit voluptate occaecat id aliqua voluptate. Consectetur non officia pariatur eu. Incididunt dolor occaecat id dolor sunt ut. Eiusmod nulla adipisicing veniam laborum laboris irure cillum aute elit voluptate ea excepteur.\nQuis anim aliqua velit. Et eiusmod magna adipisicing amet. Nisi mollit pariatur pariatur pariatur enim reprehenderit minim eu enim officia reprehenderit in voluptate adipisicing officia. Pariatur esse commodo aliquip excepteur dolor minim esse non sint laborum. Magna nisi velit ex qui eiusmod tempor tempor amet irure ipsum nostrud. Ipsum consectetur qui id nisi fugiat qui ipsum cillum.\nNisi ipsum eiusmod consectetur est velit minim esse id anim elit. Ea consequat officia esse. Quis non enim duis voluptate veniam nulla adipisicing sunt reprehenderit voluptate quis anim pariatur. Duis minim quis pariatur in labore irure ipsum. Elit cupidatat dolore irure ut. Lorem eiusmod culpa magna fugiat cillum irure esse nulla. Laboris deserunt nulla quis commodo officia proident eu. Ut tempor officia ea aliqua incididunt non labore do Lorem deserunt amet elit sunt.\nUllamco velit officia reprehenderit amet aute elit nisi voluptate enim non. Est esse nulla anim est tempor qui in tempor tempor eiusmod excepteur. Ea consequat ex deserunt dolor reprehenderit nisi sunt aliquip ea ut id ex magna aliqua. Adipisicing incididunt cillum eu reprehenderit culpa qui ipsum eiusmod velit culpa voluptate cillum. Esse dolore sit eiusmod voluptate occaecat ullamco aute nisi commodo. Irure nulla id nulla excepteur tempor anim incididunt mollit magna exercitation voluptate dolore ad culpa. Culpa adipisicing elit culpa aute esse laborum incididunt. Reprehenderit id proident sit ipsum in aliqua dolore veniam id.\nAnim labore laborum dolor qui velit deserunt ut deserunt. Aliquip voluptate ut aliquip ut magna cillum tempor cillum ea veniam. Et commodo enim consequat ex consectetur exercitation mollit sit irure culpa incididunt ad ipsum eiusmod adipisicing. Nostrud eu non deserunt aliqua in tempor. Incididunt sunt ullamco ullamco laborum consequat ad elit esse sunt nostrud labore. Culpa nulla culpa voluptate.\nMagna enim Lorem sint dolor esse ipsum adipisicing exercitation. Veniam aliquip dolor aliqua ea sint ullamco aute aliquip in. Dolor sit mollit labore anim magna fugiat eiusmod esse nulla magna sint qui. Ipsum fugiat aliqua laboris eu. Ut nisi consectetur ad tempor consectetur irure. Minim aliquip et dolore consectetur dolore mollit ex cupidatat pariatur.\nSint culpa ut sunt pariatur aliquip commodo exercitation veniam voluptate ipsum eiusmod. Incididunt deserunt voluptate est id id consequat voluptate do sunt minim irure veniam deserunt velit. Ullamco nostrud id nisi velit sunt ut nulla voluptate ad. Eiusmod fugiat do quis proident qui. Adipisicing elit reprehenderit eu anim dolore anim exercitation aliquip. Non pariatur tempor exercitation excepteur aliqua irure in anim labore. Voluptate ex tempor occaecat enim voluptate id. Culpa enim eu irure consectetur.\nIncididunt et laboris commodo veniam quis ullamco nulla pariatur occaecat fugiat id anim esse. Minim amet laboris velit exercitation do dolore. Labore est pariatur aliqua in. Magna labore esse consequat fugiat anim quis et non. Ex est occaecat ut duis veniam sint duis. Mollit non ipsum non quis esse nostrud laboris id do labore adipisicing nostrud quis officia.",
  },
  {
    id: "4",
    imageUrl: "https://loremflickr.com/720/1080",
    artcileId: 3,
    name: "Voluptate nisi minim cupidatat eiusmod enim est nulla anim voluptate aliqua cupidatat tempor aute.",
    description:
      "Sint aliqua officia minim aliquip in id consequat aliquip. Ipsum sunt deserunt elit aliqua.",
    text: "Magna enim dolore deserunt magna magna. Aliquip voluptate et cupidatat aliquip mollit do. Amet duis cillum fugiat dolore commodo in aliquip dolore labore magna aute. Culpa fugiat exercitation aliquip veniam adipisicing cillum. Pariatur aliqua sunt id culpa consectetur ullamco. Veniam amet anim ipsum incididunt aliqua officia magna est sit sit ea ut. Minim dolore ex qui et officia mollit id nulla tempor ut. Officia incididunt sunt sit eiusmod elit laborum cupidatat consectetur labore.\nQuis non dolor dolor irure ea consequat cupidatat sint commodo. Aute pariatur mollit et anim mollit eiusmod ea culpa exercitation. Voluptate eiusmod dolore commodo adipisicing ad dolore pariatur. Cupidatat adipisicing occaecat occaecat est aliqua dolore magna laborum amet culpa. Cillum est quis qui laboris in exercitation id Lorem qui. Lorem irure adipisicing deserunt.\nDolor laborum aliqua voluptate eu pariatur ullamco. Ut reprehenderit eu minim. Officia tempor consequat cillum amet consequat est ex. Laboris excepteur ullamco esse excepteur. Irure id sint magna id eu officia officia aliqua exercitation occaecat ullamco. Ipsum reprehenderit do quis laborum labore ullamco sunt. Ut officia cillum do ullamco consequat veniam cillum consectetur culpa commodo anim anim incididunt. Non reprehenderit quis duis est amet nulla ex amet ut esse in cupidatat ut in.\nUt exercitation nulla velit esse cupidatat elit ipsum ullamco exercitation laborum dolore non. Ea nisi nostrud commodo id sunt magna esse sit aute labore occaecat Lorem consequat commodo. Officia dolore eu cillum sit excepteur est. Dolor voluptate id non exercitation reprehenderit. Deserunt mollit anim minim anim consectetur ipsum minim magna consequat eiusmod velit laborum ea cupidatat. Laborum labore cupidatat cillum eu consectetur quis culpa pariatur nostrud dolor cupidatat. Magna ullamco ex exercitation sint velit et id cillum ut cupidatat nisi exercitation incididunt sunt sit. Nulla tempor tempor ad quis proident voluptate est.\nAute consequat velit anim pariatur. Culpa dolore ullamco occaecat quis nulla veniam et et ipsum. Fugiat aliquip proident nostrud ea non ea consectetur elit sit exercitation. Qui esse cillum ullamco fugiat veniam sunt reprehenderit Lorem sunt irure eu velit ipsum. Nostrud exercitation eu elit Lorem officia quis velit. Nulla amet non aliquip mollit consequat mollit cupidatat velit fugiat irure irure commodo anim Lorem.\nConsequat magna duis elit enim fugiat mollit proident non cupidatat. In incididunt qui nisi velit qui anim cupidatat in ea cillum. Enim incididunt elit incididunt nisi officia Lorem sint proident cillum id. Aute eiusmod quis culpa est consectetur irure in. Duis consequat ea deserunt occaecat. Laborum minim proident cupidatat dolor mollit in laborum non laboris. Aliqua occaecat quis aliqua qui et fugiat pariatur aliquip cupidatat. Ex dolor sit duis ipsum officia nostrud ad ullamco elit reprehenderit magna do.\nNulla ipsum nulla anim. Consequat reprehenderit id ad anim culpa culpa aliquip mollit. Eu velit voluptate commodo nostrud exercitation. Qui sit quis proident. Do ut dolore velit occaecat cillum eu occaecat fugiat voluptate tempor deserunt velit dolor ex aliquip.\nFugiat ipsum adipisicing reprehenderit. Labore pariatur id sint irure non nulla. Id labore irure id velit quis consectetur nisi nulla consequat laboris ipsum culpa amet deserunt exercitation. Commodo occaecat nisi magna labore consectetur nostrud. Eu in mollit dolore laborum aliqua officia adipisicing velit. In et sunt dolore cillum adipisicing exercitation do enim do nulla nostrud aliquip deserunt ipsum nulla.\nDolor incididunt veniam Lorem officia est do nostrud occaecat culpa ad proident. Voluptate ad ipsum occaecat aute. Labore non deserunt aliquip officia commodo ea esse adipisicing fugiat aliqua cupidatat ullamco id. Duis proident voluptate elit sunt voluptate esse quis. Ullamco nisi nulla labore quis sint elit. Sint ea labore adipisicing voluptate commodo ex consequat aliqua reprehenderit deserunt magna elit sunt. Est minim consequat ullamco ullamco do nostrud officia occaecat eiusmod. Ullamco occaecat ipsum irure excepteur dolor sit amet dolor ullamco anim deserunt nulla eu labore.\nDo irure occaecat id laborum in qui occaecat ullamco labore pariatur. Pariatur incididunt reprehenderit excepteur id fugiat. Eu eu mollit ullamco nostrud aliqua culpa aute incididunt laboris nisi. Enim nostrud excepteur adipisicing ullamco dolore dolor.",
  },
];

// let nextCatId = categories.length;

app.get("/articles/:articleId", (request, response) => {
  const { articleId } = request.params;
  const filteredArr = articles.filter((article) => article.id === articleId);
  response.json(filteredArr);
});

app.get("/categories", (request, response) => {
  response.status(200);
  response.json(categories);
});

app.get("categories/:id", (req, res) => {
  const { id } = req.params;
  let category = null;

  for (const row of categories) {
    if (id == row.id) {
      category = row;
      break;
    }
  }
  res.json(category);
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  categories = categories.filter((row) => row.id !== id);
  res.json(id);
});

app.post("categories", jsonParser, (req, res) => {
  const { name } = req.body;
  const newCategory = { id: nextCatId++, name };
  categories.push(newCategory);
  res.json(newCategory);
});

app.put("categories", jsonParser, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  let updatedCat;
  categories = categories.map((row) => {
    if (row.id === Number(id)) {
      updatedCat = { id: Number(id), name };
      return updatedCat;
    }
    return row;
  });
  res.json(updatedCat);
});

app.get("/", (request, response) => {
  response.status(200);
  response.json("Hi !");
});

app.get("/articles", (request, response) => {
  response.status(200);
  response.json(articles);
});

let product = JSON.parse(fs.readFileSync("MOCK_DATA.json", "utf-8"));

// a

app.get("/product", (req, res) => {
  let { pageSize, page } = req.query;
  pageSize = Number(pageSize) || 10;
  page = Number(page) || 1;
  let start, end;

  start = (page - 1) * pageSize;
  end = page * pageSize;
  const items = product.slice(start, end);
  res.json({
    total: product.length,
    totalPages: Math.ceil(product.length / pageSize),
    page,
    pageSize,
    items,
  });
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
