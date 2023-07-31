import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../components/layout/MainLayout'
import AuthPage from '../components/pages/AuthPage'
import LandingPage from '../components/pages/LandingPage'
import MainPage from '../components/pages/MainPage'
import MyPage from '../components/pages/MyPage'
import NotFoundPage from '../components/pages/NotFoundPage'
import ProductDetailPage from '../components/pages/ProductDetailPage'
import ProductListPage from '../components/pages/ProductListPage'
import ProductRegisterPage from '../components/pages/ProductRegisterPage'
import ProductSearchPage from '../components/pages/ProductSearchPage'
import ProductUpdatePage from '../components/pages/ProductUpdatePage'
import ProductUserListPage from '../components/pages/ProductUserListPage'
import MainPageTemplateSkeleton from '../components/templates/MainPageTemplate/MainPageTemplateSkeleton'
import ProductSkeletonTemplate from '../components/templates/ProductDetailTemplate/ProductSkeletonTemplate'
import ProductListSkeletonTemplate from '../components/templates/ProductListTemplate/ProductListSkeletonTemplate'
import PrivateRoute from './private'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				element: <PrivateRoute />,
				children: [
					{
						path: '/',
						element: (
							<Suspense fallback={<MainPageTemplateSkeleton />}>
								<MainPage />
							</Suspense>
						),
					},
					{
						path: '/home',
						element: (
							<Suspense fallback={<MainPageTemplateSkeleton />}>
								<MainPage />
							</Suspense>
						),
					},
					{
						path: '/list/:filter',
						element: (
							<Suspense fallback={<ProductListSkeletonTemplate />}>
								<ProductListPage />
							</Suspense>
						),
					},
					{ path: '/product/register', element: <ProductRegisterPage /> },
					{
						path: '/product/update/:productId',
						element: <ProductUpdatePage />,
					},
					{
						path: '/product/user/:userId',
						element: (
							<Suspense fallback={<ProductListSkeletonTemplate />}>
								<ProductUserListPage />
							</Suspense>
						),
					},
					{
						path: '/product/detail/:productId',
						element: (
							<Suspense fallback={<ProductSkeletonTemplate />}>
								<ProductDetailPage />
							</Suspense>
						),
					},
					{
						path: '/product/search/:keyword',
						element: (
							<Suspense fallback={<ProductListSkeletonTemplate />}>
								<ProductSearchPage />
							</Suspense>
						),
					},

					{ path: '/mypage', element: <MyPage /> },
				],
			},
			{ path: '/auth', element: <AuthPage /> },
			{ path: '/landing', element: <LandingPage /> },
		],
		errorElement: <NotFoundPage />,
	},
	{ path: '/*', element: <NotFoundPage /> },
])

export default router
