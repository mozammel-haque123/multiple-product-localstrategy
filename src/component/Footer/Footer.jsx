
export default function Footer() {
  return (
  <footer className="bg-white p-6 py-10 mt-26">
  <div className="text-center">
    <h1 className="font-bold text-4xl">Gadget Heaven</h1>
    <p className="font-medium text-base text-gray-500 my-4">Leading the way in cutting-edge technology and innovation.</p>
  </div>

  <div className="border border-gray-200"></div>

  <div className="flex justify-around my-4">
    <div>
      <h1 className="font-black text-[18px] my-2">Services</h1>
      <p className="font-normal text-base text-gray-500">Product Support</p>
      <p className="font-normal text-base text-gray-500">Order Tracking</p>
      <p className="font-normal text-base text-gray-500">Shipping & Delivery</p>
      <p className="font-normal text-base text-gray-500">Returns</p>
    </div>

     <div>
  <h1 className="font-black text-[18px] my-2">Company</h1>
  <p className="font-normal text-base text-gray-500"> About Us</p>
  <p className="font-normal text-base text-gray-500">Careers</p>
  <p className="font-normal text-base text-gray-500">Contact</p>
</div>

<div>
  <h1 className="font-black text-[18px] my-2">Legal</h1>
  <p className="font-normal text-base text-gray-500">  Terms of Service</p>
  <p className="font-normal text-base text-gray-500">Privacy Policy</p>
  <p className="font-normal text-base text-gray-500">Cookie Policy</p>
</div>
  </div>
</footer>
  )
}
