const randomTextData = [
  {
  title: 'Greehouse Gas (GHG) Emmissions',
  key: 'ghg',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur est et augue vehicula, id gravida erat malesuada. Duis id lacus in orci euismod suscipit id nec est. Fusce convallis finibus rhoncus. Aenean id luctus lorem, vel vehicula massa. Quisque pharetra nec augue nec facilisis. Duis facilisis cursus erat quis tempor. Maecenas sollicitudin eget purus id rhoncus. In cursus dapibus leo quis blandit.'
  },
  {
    title: 'Climate Risks',
    key: 'risks',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et vehicula ipsum, at fermentum ipsum. Vivamus sit amet dignissim sem. Integer fermentum orci lectus, quis fermentum leo aliquet a. Quisque quis purus ultricies, lobortis nisl quis, finibus tortor. Etiam feugiat molestie erat. Curabitur pellentesque pretium enim, quis viverra lorem vestibulum non. Mauris id elit justo. Aenean odio felis, vulputate sit amet commodo sed, laoreet sit amet augue. Sed eget mi a enim pretium dignissim.
Sed tempus, urna et auctor sollicitudin, dolor quam tempor justo, id feugiat nisi magna eu massa. Aliquam nec mi eget quam maximus euismod. Quisque ut pharetra justo. Maecenas dignissim lobortis erat sed interdum. Integer porttitor lectus a orci accumsan, auctor tempor quam tempus. Nam ultricies justo elit, ac dapibus dui aliquet vitae. Maecenas sagittis, sem a aliquet malesuada, dolor nulla interdum lorem, vitae auctor massa magna non lacus. Donec ultricies metus non bibendum mollis. Integer scelerisque sem ante, nec commodo sapien imperdiet ornare. Sed felis augue, consectetur at aliquet eu, ultricies sed lacus.
Nulla sed sapien condimentum, suscipit ipsum id, auctor tortor. Nunc semper enim sed lectus maximus eleifend vitae et sapien. Donec et interdum risus. Morbi eget tincidunt quam, nec dictum ligula. Nam rhoncus vitae velit eget blandit. Cras arcu lacus, sollicitudin vitae egestas sit amet, volutpat in ipsum. Integer malesuada purus id dignissim consequat. Vivamus sagittis augue mi, sit amet fringilla sem pharetra maximus. Proin ante lorem, vehicula ac velit nec, congue vehicula est. Cras eget commodo nisl. Integer tempor cursus magna at finibus.`
  },
  {
    title: 'Long term climate trends',
    key: 'trends',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a venenatis diam. Proin vitae tellus ut ante volutpat rhoncus. Ut nulla nulla, iaculis eget faucibus semper, vestibulum eget tellus. Donec a faucibus nulla. In vel ornare massa. Mauris imperdiet tellus sed felis faucibus ornare. Ut vitae lacus imperdiet, viverra metus euismod, semper risus. In hac habitasse platea dictumst.
Aliquam finibus diam at sapien commodo, ut aliquam libero sagittis. Vivamus ultrices, nibh nec egestas placerat, ex velit venenatis erat, in dapibus lacus lorem quis est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed imperdiet ex ac placerat hendrerit. Sed vulputate vitae massa vel tempor. Nulla dapibus, arcu a rutrum interdum, tellus tortor condimentum mi, a tincidunt arcu quam non leo. Suspendisse dictum nisi vestibulum congue ultrices. Nunc sollicitudin dignissim massa a cursus. Nam aliquet erat nec tincidunt lobortis. Sed iaculis nisi in sapien lobortis ullamcorper. Proin sit amet nibh sed sem molestie ornare vel eu est. Donec sed mi sed nulla blandit porta. Sed sagittis sagittis tempus. Pellentesque in interdum felis, sed placerat quam.`
  },
  {
    title: 'Impacts of climate change and variability, vulnerability, and readiness',
    key: 'impacts',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur lacus nec fermentum euismod. Nunc semper facilisis tempus. Duis vitae erat molestie, molestie ante ut, sagittis justo. Praesent congue ipsum nec sollicitudin ultricies. Morbi convallis, lorem nec vulputate pretium, elit nisl porttitor augue, condimentum venenatis massa nunc sit amet tellus. Duis ante est, suscipit nec tellus sit amet, euismod viverra tellus. Ut sit amet ante congue, bibendum nisi vitae, ornare augue.

Ut ut libero iaculis, euismod tellus sed, luctus tortor. Nam elementum non risus non pretium. Quisque eget facilisis ipsum. Maecenas sit amet sapien commodo, porta nisi at, consectetur justo. Curabitur malesuada tortor ut turpis semper scelerisque. Proin bibendum sed orci id efficitur. Maecenas quis porta lacus. Sed scelerisque finibus odio, sed ornare felis. Nulla eget ante posuere est scelerisque cursus.`
  },
  {
    title: 'Adaptation and Mitigation Priorities',
    key: 'adapt',
    items: 2,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet nunc sit amet odio viverra auctor ut vitae ante. Curabitur commodo justo a dui sagittis, consectetur volutpat dolor pharetra. Praesent dictum, turpis eu aliquet fermentum, mi urna faucibus arcu, quis congue neque justo mollis tellus. Fusce sit amet augue et tortor volutpat vehicula. Phasellus placerat euismod urna, et dapibus urna tincidunt non. Donec at viverra nisl, eget sodales ante. Integer sagittis et sapien sed laoreet.

Integer maximus augue vitae fermentum porta. Integer id elit congue, vehicula metus a, tristique justo. Phasellus malesuada ligula in nisl aliquam lobortis. Etiam eu egestas lorem. Integer id accumsan enim. Curabitur non massa vestibulum lectus elementum placerat vitae id lorem. Fusce molestie blandit nunc, quis bibendum augue bibendum at. Sed auctor quam quis ultricies molestie.`
  },
  {
    title: 'Finance',
    key: 'finance',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum nisl nec aliquam mollis. Donec sodales enim quam, at facilisis tortor dapibus et. Nulla facilisi. Proin molestie molestie mi, non ultrices diam hendrerit vitae. Pellentesque sodales fermentum urna sit amet rhoncus. Praesent nec erat leo. Cras ultrices faucibus mattis. Mauris magna velit, condimentum ac blandit a, mollis non justo. Duis et sodales diam. Integer sit amet eleifend tortor, at maximus eros. Mauris risus nisi, efficitur non posuere quis, tempus sed sem.'
  },
  {
    title: 'Opportunities for ADB',
    key: 'opportunities',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis felis nec libero porttitor porta. Praesent venenatis tempus magna id scelerisque. Pellentesque facilisis, risus non suscipit porttitor, lectus purus dapibus ex, sit amet condimentum leo turpis sed leo. Donec aliquet dolor erat, in dictum est ultricies quis. Donec consequat non felis id pretium. Ut vitae risus eget ipsum lobortis tempor. Aliquam euismod, augue vitae pellentesque placerat, eros turpis rutrum urna, eu pellentesque urna lorem eget augue. Pellentesque tincidunt egestas lorem. Cras quis aliquam massa. Cras condimentum enim quis erat vestibulum accumsan. Maecenas convallis mauris in facilisis cursus. In interdum enim et bibendum euismod. Sed lorem arcu, elementum eu semper quis, maximus id urna. Donec mi magna, cursus ac ipsum in, dignissim aliquet nulla. Pellentesque nunc quam, lacinia vel dui a, porta ultricies nisi.`
  }
]

export default randomTextData
