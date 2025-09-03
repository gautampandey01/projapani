import Layout from "./Layout"
import SalomoApp from "./SalomoApp"
import SalomoWebsite from "./SalomoWebsite"
import RequestListPage from "./RequestListPage"
import ContactPage from "./ContactPage"
import CompanyInfoPage from "./CompanyInfoPage"
import Login from "./Login"
import CartPage from "./CartPage"
import Success from "./Success"   // fixed import
import Cancel from "./Cancel"     // fixed import

// A reusable delay loader for spinner effect
const delayLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500)) // 1.5s delay
  return null
}

export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <SalomoApp />,
        loader: delayLoader,
      },
      {
        path: "post",
        element: <SalomoWebsite />,
        loader: delayLoader,
      },
      {
        path: "requests",
        element: <RequestListPage />,
        loader: delayLoader,
      },
      {
        path: "contact",
        element: <ContactPage />,
        loader: delayLoader,
      },
      {
        path: "info",
        element: <CompanyInfoPage />,
        loader: delayLoader,
      },
      {
        path: "cart",
        element: <CartPage />,
        loader: delayLoader,
      },
      {
        path: "success",
        element: <Success />,   // updated
        loader: delayLoader,
      },
      {
        path: "cancel",
        element: <Cancel />,    // updated
        loader: delayLoader,
      },
    ],
  },
  {
    index: true,
    element: <Login />,
    loader: delayLoader,
  },
]
