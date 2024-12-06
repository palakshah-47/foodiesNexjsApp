import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meal-grid';
import { getMeals } from '@/lib/meals';
import React, { Suspense } from 'react';

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, cretaed{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
          to customize!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<h2 className={classes.loading}>Fetching data...</h2>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
