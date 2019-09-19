import config from '../config';
import TokenService from "./token-service";

const MealApiService={
  postMeal(meal) {
    return fetch(`${config.API_ENDPOINT}/event`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body:JSON.stringify({
        time:meal.time,
        type:'meal',
        items:meal.items,
        name:meal.name

      })
    })/* 
      .then(res =>
        (!res.ok)
          ? res.json().then(err => Promise.reject(err))
          : res.json()
      ) */
  }

}

export default MealApiService;