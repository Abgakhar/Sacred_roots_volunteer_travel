'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShoppingBag, 
  Heart, 
  Check, 
  Sparkles, 
  TreePine, 
  Percent, 
  X, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';
import { SHOP_PRODUCTS, ShopProduct } from '@/data/shop';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<{ product: ShopProduct; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'Handcrafts', label: 'Artisanal Handcrafts' },
    { id: 'Coffee & Cacao', label: 'Organic Coffee & Cacao' },
    { id: 'Apparel', label: 'Field Apparel' },
    { id: 'Conservation Impact', label: 'Conservation Gifts' },
  ];

  const filtered = selectedCategory === 'all'
    ? SHOP_PRODUCTS
    : SHOP_PRODUCTS.filter((p) => p.category === selectedCategory);

  const addToCart = (product: ShopProduct) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalConservationImpact = cart.reduce(
    (sum, item) => sum + (item.product.price * 0.4) * item.quantity,
    0
  );

  return (
    <div className="pt-28 sm:pt-36 pb-20">
        
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
                Regenerative Goods
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14261d] tracking-tight leading-tight">
                Shop for Conservation
              </h1>
              <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-normal">
                Every purchase directly finances Costa Rican turtle hatchery materials, biological corridor tree seedlings, and indigenous women’s artisan cooperatives.
              </p>
            </div>

            {/* Cart Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#1a4231] hover:bg-[#122e22] text-white font-bold text-xs shadow-md transition-all self-start md:self-auto"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>View Cart ({cart.reduce((s, i) => s + i.quantity, 0)})</span>
            </button>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#1a4231] text-white shadow-sm'
                    : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, index) => (
              <div 
                key={product.id}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 w-full bg-stone-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index < 3}
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-lg font-bold text-[#14261d]">
                        {product.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-[#14261d]">
                        ${product.price}
                      </span>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg">
                        <Heart className="w-3 h-3 fill-emerald-800 text-emerald-800" />
                        {product.impactNote}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="w-full py-3 rounded-xl bg-stone-900 hover:bg-[#1a4231] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Slide-over Cart Modal */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div 
              className="fixed inset-0 bg-stone-950/40 backdrop-blur-sm"
              onClick={() => setIsCartOpen(false)}
            />

            <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-emerald-800" />
                    <h2 className="font-serif text-xl font-bold text-[#14261d]">
                      Your Conservation Cart
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 rounded-lg text-stone-400 hover:text-stone-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {checkoutSuccess ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#14261d]">
                      Order Reserved!
                    </h3>
                    <p className="text-xs text-stone-600">
                      Thank you for supporting community conservation in Costa Rica. Our fulfillment team will email tracking and confirmation.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setCart([]);
                        setCheckoutSuccess(false);
                        setIsCartOpen(false);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-[#1a4231] text-white text-xs font-bold"
                    >
                      Continue Browsing
                    </button>
                  </div>
                ) : cart.length === 0 ? (
                  <div className="py-16 text-center text-stone-500 space-y-3">
                    <p className="text-sm">Your cart is currently empty.</p>
                    <button
                      type="button"
                      onClick={() => setIsCartOpen(false)}
                      className="text-xs font-bold text-emerald-900 underline"
                    >
                      Explore Products
                    </button>
                  </div>
                ) : (
                  <div className="py-4 space-y-4">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex gap-4 items-center p-3 rounded-2xl bg-stone-50 border border-stone-200">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            sizes="56px"
                            referrerPolicy="no-referrer"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-[#14261d] truncate">{item.product.name}</h4>
                          <p className="text-xs text-stone-500">Qty: {item.quantity} × ${item.product.price}</p>
                          <span className="text-[10px] text-emerald-800 font-semibold">{item.product.impactNote}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-stone-400 hover:text-rose-600 text-xs font-semibold p-1"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {!checkoutSuccess && cart.length > 0 && (
                <div className="pt-4 border-t border-stone-200 space-y-4">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                    <div className="flex justify-between font-bold">
                      <span>Direct Field Impact:</span>
                      <span>${totalConservationImpact.toFixed(2)} USD</span>
                    </div>
                    <p className="text-[10px] text-emerald-800">
                      Disbursed immediately to local seed nurseries &amp; turtle patrol stipends.
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-base font-serif font-bold text-[#14261d]">
                    <span>Total:</span>
                    <span>${totalAmount.toFixed(2)} USD</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setCheckoutSuccess(true)}
                    className="w-full py-4 rounded-xl bg-[#1a4231] hover:bg-[#122e22] text-white font-bold text-sm shadow-lg transition-all"
                  >
                    Proceed to Eco-Checkout (${totalAmount.toFixed(2)})
                  </button>
                </div>
              )}

            </div>
          </div>
        )}
    </div>
  );
}
