import Container from 'components/layout/Container'
import MyPageTemplateSkeleton from 'components/templates/MyPageTemplate/MyPageTemplateSkeleton'
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
import API_KEY from '../consts/ApiKey'
import PrivateRoute from './private'

const router = createBrowserRouter([
	{
		path: '/',
		element: <PrivateRoute />,
		children: [
			{
				element: <MainLayout />,
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
						path: API_KEY.HOME,
						element: (
							<Suspense fallback={<MainPageTemplateSkeleton />}>
								<MainPage />
							</Suspense>
						),
					},
					{
						path: API_KEY.LIST + '/:filter',
						element: (
							<Suspense fallback={<ProductListSkeletonTemplate />}>
								<ProductListPage />
							</Suspense>
						),
					},
					{
						path: API_KEY.PRODUCT + API_KEY.REGISTER,
						element: (
							<Suspense fallback={<Container />}>
								<ProductRegisterPage />
							</Suspense>
						),
					},
					{
						path: API_KEY.PRODUCT + API_KEY.UPDATE + '/:productId',
						element: (
							<Suspense fallback={<Container />}>
								<ProductUpdatePage />
							</Suspense>
						),
					},
					{
						path: API_KEY.PRODUCT + API_KEY.USER + '/:userId',
						element: (
							<Suspense fallback={<ProductListSkeletonTemplate />}>
								<ProductUserListPage />
							</Suspense>
						),
					},
					{
						path: API_KEY.PRODUCT + API_KEY.DETAIL + '/:productId',
						element: (
							<Suspense fallback={<ProductSkeletonTemplate />}>
								<ProductDetailPage />
							</Suspense>
						),
					},
					{
						path: API_KEY.PRODUCT + API_KEY.SEARCH + '/:keyword',
						element: (
							<Suspense fallback={<ProductListSkeletonTemplate />}>
								<ProductSearchPage />
							</Suspense>
						),
					},
					{
						path: API_KEY.MYPAGE,
						element: (
							<Suspense fallback={<MyPageTemplateSkeleton />}>
								<MyPage />
							</Suspense>
						),
					},
				],
			},
		],
		errorElement: <NotFoundPage />,
	},
	{ path: API_KEY.ACCOUNT, element: <AuthPage /> },
	{
		path: API_KEY.LANDING,
		element: (
			<Suspense fallback={<></>}>
				<LandingPage />
			</Suspense>
		),
	},
	{ path: '/*', element: <NotFoundPage /> },
])

export default router
