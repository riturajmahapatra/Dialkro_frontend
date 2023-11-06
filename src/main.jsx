import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layout'
import CouriersPage from './popularCategory/couriers/CouriersPage'
import TransportPage from './popularCategory/transport/TransportPage'
import HospitalsPage from './popularCategory/hospitals/HospitalsPage'
import HotelsPage from './popularCategory/hotels/HotelsPage'
import MoversPage from './popularCategory/movers/MoversPage'
import TravelsPage from './TrendingCategory/travels/TravelsPage'
import DentistPage from './TrendingCategory/dentist/DentistPage'
import GymPage from './TrendingCategory/gym/GymPage'
import HostelsPage from './TrendingCategory/hostels/HostelsPage'
import PestControlPage from './TrendingCategory/pestControl/PestControlPage'
import PetShopPage from './TrendingCategory/petShop/PetShopPage'
import AcRepairPage from './repairServices/acRepair/AcRepairPage'
import CarCarePage from './repairServices/carCare/CarCarePage'
import WashingMachinePage from './repairServices/washingMachine/WashingMachinePage'
import ElectronicServicesPage from './repairServices/electronicServices/ElectronicServicesPage'
import ProductDetailPage from './ProductDetails/ProductDetailPage'
import RestaurantPage from './popularCategory/restaurant/RestaurantPage'
import RentalsPage from './TrendingCategory/rentals/RentalsPage'
import SubCategoryRestaurantPage from './popularCategory/restaurant/components/SubCategory/SubCategoryRestaurantPage'
import SubCategoryRentalPage from './TrendingCategory/rentals/components/SubCategory/SubCategoryRentalPage.jsx'
import SubCategoryHospitalPage from './popularCategory/hospitals/components/SubCategory/SubCategoryHospitalPage'
import BusinessListingForm from './components/Navbar/addBusiness/BusinessListingForm'
import SubCategoryCarPage from './repairServices/carCare/components/SubCategory/SubCategoryCarPage'
import SubCategoryAcPage from './repairServices/acRepair/components/SubCategory/SubCategoryAcPage'
import SubCategoryWashingMachinePage from './repairServices/washingMachine/components/SubCategory/SubCategoryWashingMachinePage'
import SubCategoryElectronicPage from './repairServices/electronicServices/components/SubCategory/SubCategoryElectronicPage'
import BusinessForm from './components/Navbar/addBusiness/BuisnessForm'
import PaymentForm from './components/Navbar/addBusiness/PaymentForm'
import Education from './otherServices/education/Education'
import WeddingServices from './otherServices/weddingService/WeddingServices'
import ContactForm from './components/Navbar/addBusiness/ContactForm'
import ThankYou from './components/Navbar/addBusiness/ThankYou'
import KeywordSelectionForm from './components/Navbar/addBusiness/KeywordSelectionForm'
import SubCategoryWeddingServicesPage from './otherServices/weddingService/components/SubCategory/SubCategoryWeddingServicesPage'
import SubCategoryEducationPage from './otherServices/education/components/SubCategory/SubCategoryEducationPage'
import SubCategoryConsultantPage from './otherServices/consultant/components/SubCategory/SubCategoryConsultantPage'
import Consultant from './otherServices/consultant/Consultant'
import SubCategoryRealEstatePage from './popularCategory/housings/components/SubCategory/SubCategoryRealEstatePage'
import RealEstatePage from './popularCategory/housings/RealEstatePage'
import Autocare from './automobileparts/Autocare'
import ProductDetailPageShop from './automobileparts/components/ProductDetails/ProductDetailPageShop'
import ProductDetailb2bPageShop from './B2B/components/ProductDetails/ProductDetailPageShop'
import SubCategoryAutoPage from './automobileparts/components/SubCategory/SubCategoryAutoPage'
import B2B from './B2B/B2B'
import SubCategoryb2bPage from './B2B/components/SubCategory/SubCategoryb2bPage'
import HomeService from './HomeServices/HomeService'
import SubCategoryHomeServicePage from './HomeServices/components/SubCategory/SubCategoryHomeServicePage'
import LoginModal from './components/modals/LoginModal'
import Contractor from './otherServices/contractor/Contractor'
import SubCategoryContractorPage from './otherServices/contractor/components/SubCategory/SubCategoryContractorPage'
import SubCategoryCouriersPage from './otherServices/couriers/components/SubCategory/SubCategoryCouriersPage'
import AstrologerPage from './popularCategory/astrologer/AstrologerPage'
import { Toaster } from 'react-hot-toast'
import Refrigerator from './HomeServices/components/refrigerator/Refrigerator'
import Kitchen from './HomeServices/components/kitchen/Kitchen'
import TV from './HomeServices/components/tv/tv'
import Chimney from './HomeServices/components/chimney/Chimney'
import WaterPurifier from './HomeServices/components/waterPurifier/WaterPurifier'
import PestControl from './HomeServices/components/pestControl/PestControl'
import CheckoutPage from './CheckoutPage/CheckoutPage'
import AgricultureEquipment from './B2B/components/SubSubCategory/AgricultureEquipment'
import AgricultureMachinery from './B2B/components/SubSubCategory/AgricultureMachinery'
import EngineParts from './B2B/components/SubSubCategory/EngineParts'
import ElectricalComponents from './B2B/components/SubSubCategory/ElectricalComponents'
import Error from './Error'
import SubCategoryShoppingPage from './OnlineShoppingMain/components/SubCategory/SubCategoryShoppingPage'
import OnlineShoppingGroceries from './OnlineShopping/components/OnlineShoppingGroceries'
import OnlineShoppingClothing from './OnlineShopping/components/OnlineShoppingClothing'
import OnlineShoppingElectronics from './OnlineShopping/components/OnlineShoppingElectronics'
import OnlineShoppingFurniture from './OnlineShopping/components/OnlineShoppingFurniture'
import OnlineShoppingMovies from './OnlineShopping/components/OnlineShoppingMovies'
import IndianFood from './popularCategory/restaurant/components/IndianFood'
import GlobalCuisines from './popularCategory/restaurant/components/GlobalCuisines'
import NightStyle from './popularCategory/restaurant/components/NightStyle'
import QuickBites from './popularCategory/restaurant/components/QuickBites'
import Foodie from './popularCategory/restaurant/components/Foodie'
import Dessert from './popularCategory/restaurant/components/Dessert'
import SubCategoryDoctorsPage from './Doctor/components/SubCategory/SubCategoryDoctorsPage'
import DoctorsPage from './Doctor/DoctorsPage'
import AgriculturalToolPage from './B2B/components/SubSubCategory/AgriculturalToolPage'
import Machinerypage from './B2B/components/SubSubCategory/Machinerypage'
import ElectricComp from './B2B/components/SubSubCategory/ElectricComp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />
  },
  {
    path: '/signin',
    element: <LoginModal />
  },
  {
    path: '/addbusiness',
    element: <BusinessListingForm />
  },
  {
    path: '/businessform',
    element: <BusinessForm />
  },
  {
    path: '/autocare',
    element: <Autocare />
  },
  {
    path: '/doctors',
    element: <DoctorsPage />
  },
  {
    path: '/subcategorydoctors',
    element: <SubCategoryDoctorsPage />
  },
  {
    path: '/onlineshoppingcategories', // main online shopping elements
    element: <SubCategoryShoppingPage />
  },
  {
    path: '/online/groceries/',
    element: <OnlineShoppingGroceries /> // main connected to groceries
  },
  {
    path: '/online/clothing/',
    element: <OnlineShoppingClothing /> // main connected to clothing
  },
  {
    path: '/online/electronics/',
    element: <OnlineShoppingElectronics /> // main connected to electronics
  },
  {
    path: '/online/furniture/',
    element: <OnlineShoppingFurniture /> // main connected to furniture
  },
  {
    path: '/online/movies/',
    element: <OnlineShoppingMovies /> // main connected to groceries
  },
  {
    path: '/tvservices',
    element: <Autocare />
  },
  {
    path: '/tvCategories',
    element: <TV />
  },
  {
    path: '/chimneyCategories',
    element: <Chimney />
  },
  {
    path: '/waterpurifierCategories',
    element: <WaterPurifier />
  },
  {
    path: '/pestcontrolCategories',
    element: <PestControl />
  },
  {
    path: '/kitchenCategories',
    element: <Kitchen />
  },
  {
    path: '/refrigeratorservices',
    element: <Autocare />
  },
  {
    path: '/refrigeratorCategories',
    element: <Refrigerator />
  },
  {
    path: '/kitchenservices',
    element: <Autocare />
  },

  {
    path: '/autocare/Product_Detail',
    element: <ProductDetailPageShop />
  },
  {
    path: '/autocarecategory',
    element: <SubCategoryAutoPage />
  },
  {
    path: '/homeservices',
    element: <HomeService />
  },
  {
    path: '/homeservicescategory',
    element: <SubCategoryHomeServicePage />
  },
  {
    path: '/contactinfo',
    element: <ContactForm />
  },
  {
    path: '/keywordsform',
    element: <KeywordSelectionForm />
  },
  {
    path: '/otherinfo',
    element: <PaymentForm />
  },
  {
    path: '/thankyou',
    element: <ThankYou />
  },

  {
    path: '/transport',
    element: <TransportPage />
  },
  {
    path: '/restaurant',
    element: <RestaurantPage />
  },
  {
    path: '/restaurantcategory',
    element: <SubCategoryRestaurantPage />
  },
  {
    path: '/couriers',
    element: <CouriersPage />
  },
  {
    path: '/hospitals/:name',
    element: <HospitalsPage />
  },
  {
    path: '/hospitalscategory',
    element: <SubCategoryHospitalPage />
  },
  {
    path: '/hotels',
    element: <HotelsPage />
  },
  {
    path: '/movers',
    element: <MoversPage />
  },
  {
    path: '/rentals',
    element: <RentalsPage />
  },
  {
    path: '/rentalcategory',
    element: <SubCategoryRentalPage />
  },
  {
    path: '/travels',
    element: <TravelsPage />
  },
  {
    path: '/dentist',
    element: <DentistPage />
  },
  {
    path: '/gym',
    element: <GymPage />
  },
  {
    path: '/hostels',
    element: <HostelsPage />
  },
  {
    path: '/realestate',
    element: <RealEstatePage />
  },
  {
    path: '/realestatecategory',
    element: <SubCategoryRealEstatePage />
  },
  {
    path: '/pestControl',
    element: <PestControlPage />
  },
  {
    path: '/petshop',
    element: <PetShopPage />
  },
  {
    path: '/acRepair/:name',
    element: <AcRepairPage />
  },
  {
    path: '/acRepaircategory',
    element: <SubCategoryAcPage />
  },
  {
    path: '/carCare/:name',
    element: <CarCarePage />
  },
  {
    path: '/carCarecategory',
    element: <SubCategoryCarPage />
  },
  {
    path: '/electronicServices/:name',
    element: <ElectronicServicesPage />
  },
  {
    path: '/electronicServicesCategory',
    element: <SubCategoryElectronicPage />
  },
  {
    path: '/washingMachine/:name',
    element: <WashingMachinePage />
  },
  {
    path: '/washingMachineCategory',
    element: <SubCategoryWashingMachinePage />
  },
  {
    path: '/weddingandeventservices/:name',
    element: <WeddingServices />
  },
  {
    path: '/restaurantcategory/indianfood',
    element: <IndianFood />
  },
  {
    path: '/restaurantcategory/globalcuisines',
    element: <GlobalCuisines />
  },
  {
    path: '/restaurantcategory/nightstyle',
    element: <NightStyle />
  },
  {
    path: '/restaurantcategory/quickbites',
    element: <QuickBites />
  },
  {
    path: '/restaurantcategory/foodie',
    element: <Foodie />
  },
  {
    path: '/restaurantcategory/dessert',
    element: <Dessert />
  },
  {
    path: '/weddingservicescategory',
    element: <SubCategoryWeddingServicesPage />
  },
  {
    path: '/education/:name',
    element: <Education />
  },
  {
    path: '/educationcategory',
    element: <SubCategoryEducationPage />
  },
  {
    path: '/consultant',
    element: <Consultant />
  },
  {
    path: '/consultantcategory',
    element: <SubCategoryConsultantPage />
  },
  {
    path: '/restaurant/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/transport/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/couriers/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/hospitals/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/hotel/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/movers/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/rentals/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/travels/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/dentist/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/gym/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/hostels/Product_Detail',
    element: <ProductDetailPage />   
  },
  {
    path: '/housings/Product_Detail',
    element: <ProductDetailPage /> 
  },
  {
    path: '/pestControl/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/petshop/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/acRepairPage/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/carCare/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/electronicServices/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/washingMachine/Product_Detail',
    element: <ProductDetailPage />
  },

  {
    path: '/bridalMakeup/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/photography/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/weddingPlanning/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/weddingvenues/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/autocare',
    element: <Autocare />
  },
  {
    path: '/b2bcategory',
    element: <SubCategoryb2bPage />
  },
  {
    path: '/b2b/:name',
    element: <B2B />
  },

  /* add movies section as well when needed */

  {
    path: '/b2b/Product_Detail',
    element: <ProductDetailb2bPageShop />
  },
  {
    path: '/contractor',
    element: <Contractor />
  },
  {
    path: '/contractorcategory',
    element: <SubCategoryContractorPage />
  },
  {
    path: '/contractor/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/couriers',
    element: <CouriersPage />
  },
  {
    path: '/courierscategory',
    element: <SubCategoryCouriersPage />
  },
  {
    path: '/couriers/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/astrologer',
    element: <AstrologerPage />
  },
  {
    path: '/astrologer/Product_Detail', 
    element: <ProductDetailPage />
  },
  {
    path: '/checkoutpage',
    element: <CheckoutPage />
  },

  {
    path: '/agriculturetools',
    element: <AgricultureEquipment />
  },

  {
    path: '/machinarypage/:name',
    element: <Machinerypage />
  },

  {
    path: '/agriculturetoolpage/:name',
    element: <AgriculturalToolPage />
  },

  {
    path: '/agriculturemachinery',
    element: <AgricultureMachinery />
  },
  {
    path: '/engineparts',
    element: <EngineParts />
  },
  {
    path: '/electricalcomponents',
    element: <ElectricalComponents />
  },

  {
    path: '/componentpage/:name',
    element: <ElectricComp />
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="top center" reverseOrder={false} />
    <RouterProvider router={router} />
  </React.StrictMode>
)
