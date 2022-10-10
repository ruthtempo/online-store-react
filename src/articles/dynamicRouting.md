How to add dynamic routing to your react single page application

This article aims to explain how to create routes dynamically as well as how to make dynamic api calls, depending on the selected route.

For this demonstration, we will use the example of an online-shop web prototype.

1. First, we need to create our route path as a dynamic route.

```ts
<Route path="category/:categoryName" element={<Categories />} />
```

2. Next, we can create our navigation links, each of them will have a unique path (different product categories)
   This example API (fakestore.api) allows us to fetch by category.

```ts
const [categories, setCategories] = useState<string[]>([]);

useEffect(() => {
  const fetchProductCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  };
  fetchProductCategories();
}, []);
```

We can map through our `categories` array and for each category, we will add a link with our category name.

```ts
const Navigation = () => (
  <Nav>
    {categories.map((cat) => (
      <Nav.Link as={Link} to={`category/${encodeURIComponent(cat)}`}>
        {cat.toUpperCase()}
      </Nav.Link>
    ))}
  </Nav>
);
```

Keep in mind that if your string has spaces or special characters, you will need to use the method `encodeURIComponent()`, which will turn a string such as `"men's clothing"` into a URI:

```
https://localhost:3000/category/men's%20clothing
```

3. The component that will render the content dinamically (`Categories.tsx`) will receive the parameter from the router (in this example `:categoryName`). This parameter will be different everytime, depending on which path we click on our navigation.

```js
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="category/:categoryName" element={<Categories />} />
      </Routes>
    </>
  );
}
```

```ts
export const Categories = () => {
  const { categoryName } = useParams();

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProductCategories = () => {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => setCategories(json));
    };
    fetchProductCategories();
  }, []);

  return ... // return component jsx
};
```

We will use this parameter in the API call url to dinamically fetch our categories. If the `categoryName` exists, the products of that category will be rendered.

![diagram1](diagram1.png)
