import React from 'react';
import Input from "../input";

const SignUpForm = ({error, onChangeHandler, input, handleChangeSelect}) => {
    return(
        <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              {/* Name Field */}
              <Input id="username" name="username" type="text" infoText="Enter Name" label="Name" classN="col-span-6 sm:col-span-3" value={input.username || ''} error={error.username} onChange={(e) => onChangeHandler(e)} />
              {/* Password Field */}
              <Input id="pass" name="pass" type="password" infoText="Enter Password" label="Password" classN="sm:col-span-3" value={input.pass || ''} error={error.pass}  onChange={onChangeHandler} />
              {/* Email Field */}
              <Input id="email-address" name="email" type="email" infoText="" label="Email address" classN="sm:col-span-6" value={input.email || ''} error={error.email} autoComplete="email" onChange={onChangeHandler} />
              {/* Phone Field */}
              <Input id="pass" name="phone" type="text" infoText="" label="Phone" classN="sm:col-span-3" autoComplete="phone" value={input.phone || ''} error={error.phone} onChange={onChangeHandler} />
              {/* Country Field */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-1 pl-2 pr-5  shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={handleChangeSelect}
                  value={input.country || ''}
                >
                  <option hidden value="Select Country">Select Country</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                </select>
                <span className={error.country ? "text-xs text-red-600" : "hidden"}>{error.country}</span>
              </div>
              {/* Address Field */}
              <Input id="street-address" name="street" type="text" infoText="" label="Street address" classN="sm:col-span-6" autoComplete="street-address" value={input.street || ''} error={error.street} onChange={onChangeHandler} />
              {/* City Field */}
              <Input id="city" name="city" type="text" infoText="" label="City" classN="sm:col-span-2" autoComplete="address-level2" value={input.city || ''} error={error.city} onChange={onChangeHandler} />
              {/* State Field */}
              <Input id="region" name="state" type="text" infoText="" label="State / Province" classN="sm:col-span-2" autoComplete="address-level1" value={input.state || ''} error={error.state} onChange={onChangeHandler} />
              {/* Zip Field */}
              <Input id="postal-code" name="zip" type="text" infoText="" label="ZIP / Postal code" classN="sm:col-span-2" autoComplete="postal-code" value={input.zip || ''} error={error.zip} onChange={(e) => onChangeHandler(e)} />
            </div>
          </div>
    )
}

export default SignUpForm;