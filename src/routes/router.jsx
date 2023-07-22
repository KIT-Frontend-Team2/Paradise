import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../components/layout/MainLayout'
import AuthPage from '../components/pages/AuthPage'
import ErrorPage from '../components/pages/ErrorPage'
import MainPage from '../components/pages/MainPage'
import MyPage from '../components/pages/MyPage'
import ProductDetailPage from '../components/pages/ProductDetailPage'
import ProductListPage from '../components/pages/ProductListPage'
import ProductRegisterPage from '../components/pages/ProductRegisterPage'
import ProductSearchPage from '../components/pages/ProductSearchPage'
import ProductUpdatePage from '../components/pages/ProductUpdatePage'
import ProductUserListPage from '../components/pages/ProductUserListPage'
import RendingPage from '../components/pages/RendingPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ path: '/', element: <MainPage /> },
			{ path: '/*', element: <ErrorPage /> },
			{ path: '/auth', element: <AuthPage /> },
			{ path: '/list/:filter', element: <ProductListPage /> },
			{ path: '/product/register', element: <ProductRegisterPage /> },
			{ path: '/product/update/:productId', element: <ProductUpdatePage /> },
			{ path: '/product/user/:userId', element: <ProductUserListPage /> },
			{
				path: '/product/detail/:productId',
				element: <ProductDetailPage />,
			},
			{ path: '/product/search/:keyword', element: <ProductSearchPage /> },
			{ path: '/mypage', element: <MyPage /> },
		],
	},
	{
		path: '/rending',
		element: <RendingPage />,
	},
])

export default router
