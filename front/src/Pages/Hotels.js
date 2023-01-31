import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export function Hotels() {
  const [listhotels, setlisthotels] = useState([]);
  const stars = ["⭐", "⭐", "⭐", "⭐", "⭐"];
  const [pays, setpays] = useState("--");
  const [budget, setbudget] = useState(0);
  const [starsH, setstarsH] = useState(0);
  console.log(budget);
  useEffect(() => {
    setlisthotels([
      {
        _id: {
          $oid: "63834dc273c555e4d4266573",
        },
        Pays: "Tunisie",
        Nom: "El Mouradi",
        number: "71005006",
        img1: "https://image.resabooking.com/images/hotel/El_Mouradi_El_Menzah_5.jpeg",
        img2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/e7/00/5b/el-mouradi-el-menzah.jpg?w=700&h=-1&s=1",
        img3: "https://www.kayak.fr/rimg/himg/d2/fb/98/expediav2-101295-05bc7e-950584.jpg?width=1366&height=768&crop=true",
        prix: 320,
        region: "Hammamet",
      },
      {
        _id: {
          $oid: "63837552184d1a3117013a21",
        },
        Pays: "Tunisie",
        region: "Sousse",
        Nom: "The Pearl Resort & Spa",
        number: "71005706",
        prix: 270,
        Stars: 4,
        img1: "https://lh3.googleusercontent.com/proxy/ZFTJouoUZ5YEetdsrXCl2IdaYpw01cC9iOcWu7Y9L6pApdfyPcxkiaT5jOvVZTwtqEWq_xO9Jmuj7YCneXrRkRhwn6WodiPFQM4GpUkLoJPhES8xlrDREwJfrdoj8DFW174YNLfBcL4tzKgxCoLvVaMtofT6g9Y=w296-h202-n-k-rw-no-v1",
        img2: "https://lh3.googleusercontent.com/proxy/SwFRK5OsJPNfCjUHkb-B-46PbCHp1-x8e6BCLL6pA1Dp3YSsMBW1hWwYJ0RJ7Y1FbVY0svFSfF8cWJu77FmEQrs5J_5aa_Mbsm32CMntYNYui_DMUfFERDO--07ZTR1whhlbv4MvB4GlwJeVBzrNoEhW_45Jjw0=w296-h202-n-k-rw-no-v1",
        img3: "https://lh3.googleusercontent.com/proxy/LUf6Ok-BUqfBEN4itGcO7sCmXvFFdIO2qWxgnEK_mQVciaeZMvbfhwMm_ry-8aAApf0rlYNpowkM_yp060lyZ07Awm8mGNB4Wz1N9fLtfmdFFxORcfE-SD7wvFHG8g8bQ-1w3egLUDtLG_yzuNN7yKlgqPbjPg=w296-h202-n-k-rw-no-v1",
      },
      {
        _id: {
          $oid: "63837671184d1a3117013a22",
        },
        Pays: "Tunisie",
        region: "Sousse",
        Nom: "Mövenpick ",
        number: "70 002 007",
        prix: 210,
        Stars: 5,
        img1: "https://lh3.googleusercontent.com/proxy/WtPmFxZCD0uwEHwKcputGtcRT9gg_wZHz3g_ucwShYIxChFvsi5KEsZc2WaIHf4Yy6Y6du2d1tyhlMykPRC55RoyUopEcV5DaVLj90W-xgyR--eOLbNwZFrtXK-260CZHH3k4hWmNxhnluuTVCleDVEvJ_xacA=w296-h202-n-k-rw-no-v1",
        img2: "https://lh3.googleusercontent.com/proxy/ZlHnPNhuMB1qWYgV5IaiVnlfV2oyQL1fW-6ovYMOUZwomFWjSzJgauUTMADQxNZTVxT_ZJmq2vx5ojZLlxNQzMGBL9X5P3bjEzlZ1etmUtrpH5tx77aZOxoIJ_k8vvW1-USCXhq7YVd1GwZNYNU7P6wh-4xGfg=w296-h202-n-k-rw-no-v1",
        img3: "https://lh3.googleusercontent.com/p/AF1QipORDpbzMiqZ9zExcA0iNvrf2o4fNpkcxSTy49Ce=w296-h202-n-k-rw-no-v1",
      },
      {
        _id: {
          $oid: "6383770a184d1a3117013a23",
        },
        Pays: "Tunisie",
        region: "Hammamet",
        Nom: "Laico Tunis Spa ",
        number: "72 102 007",
        prix: 400,
        Stars: 5,
        img1: "https://lh3.googleusercontent.com/p/AF1QipNfIEhsQomtTeBoYYDRr-8CojubUYSzQtYMJsyk=w296-h202-n-k-rw-no-v1",
        img2: "https://lh3.googleusercontent.com/p/AF1QipM4Bm-RM6_OA_vfdmFCLwp3UpFmGsuASWybNJKD=w296-h202-n-k-rw-no-v1",
        img3: "https://lh3.googleusercontent.com/p/AF1QipP-vvPv0ABSJIaC4_6IVJQvroDyMRUUqioi9Q6k=w296-h202-n-k-rw-no-v1",
      },
      {
        _id: {
          $oid: "638377ae184d1a3117013a24",
        },
        Pays: "Tunisie",
        region: "Monastir",
        Nom: " Royal Thalassa",
        number: "92 102 007",
        prix: 340,
        Stars: 4,
        img1: "https://lh3.googleusercontent.com/proxy/kcfdqJvb0j-6s3y2pgR7UMTvQ7R9c9nw9b-k7S_lAHSlT2WTTLXisCjwWWyDAXWT_gzrNLfubn8NTQHI8l3fFOGvH0BpkcNCWm60QpVPuk1IzOAA4WHwQsbJ0ZM4dlkZwkBacfUWpQvFyomXC_m7neL-XJzKbA=w296-h202-n-k-rw-no-v1",
        img2: "https://lh3.googleusercontent.com/proxy/oIAsiRSzHT0ibZnnDLrLU5G3Ria7FhD0NxXNDetH-JxXCjo-cL5Szx5U2FDgmH448j6S1s9atK_rTZylvrMWn1SDXYeFNgMd6LqzguQITKVW4adwRrCkk7ZuNAZ0AmJwNLo9OtDkvWeWV8R5rMI4FxY_9a6DZo8=w296-h202-n-k-rw-no-v1",
        img3: "https://lh3.googleusercontent.com/proxy/PYUQf_qwMSpDoxAt3LltKlLHHkQPoVJP8rnUHrT9sCNDGoFbSmcqXZYnPGSdlSYw3_IVqUywKxqbfNOm_W3Jgsc3SJ1iJXHuQNaOISPOqlf7yf89qNZQkKhP3mn1VhD2ULsuaHGn1fIJev-6neKcc7jeH_YHig=w296-h202-n-k-rw-no-v1",
      },
      {
        _id: {
          $oid: "6383993a184d1a3117013a25",
        },
        Pays: "Paris",
        region: "Paris",
        Nom: "Amoi Paris",
        number: "+33 92 102 007",
        prix: 1980,
        Stars: 4,
        img1: "https://images.trvl-media.com/lodging/75000000/74100000/74092600/74092581/a900f40e.jpg?impolicy=resizecrop&rw=598&ra=fit",
        img2: "https://images.trvl-media.com/lodging/75000000/74100000/74092600/74092581/6a0a143f.jpg?impolicy=resizecrop&rw=297&ra=fit",
        img3: "https://images.trvl-media.com/lodging/75000000/74100000/74092600/74092581/250979a1.jpg?impolicy=resizecrop&rw=297&ra=fit",
      },
      {
        _id: {
          $oid: "638399ed184d1a3117013a26",
        },
        Pays: "Paris",
        region: "Champs Elysées",
        Nom: "Radisson Blu",
        number: "+33 70 102 007",
        prix: 1850,
        Stars: 5,
        img1: "https://images.trvl-media.com/lodging/1000000/870000/864300/864201/f13b22be.jpg?impolicy=resizecrop&rw=297&ra=fit",
        img2: "https://images.trvl-media.com/lodging/1000000/870000/864300/864201/4a9ca398.jpg?impolicy=resizecrop&rw=598&ra=fit",
        img3: "https://images.trvl-media.com/lodging/1000000/870000/864300/864201/435e001c.jpg?impolicy=resizecrop&rw=297&ra=fit",
      },
      {
        _id: {
          $oid: "63839e23184d1a3117013a27",
        },
        Pays: "Paris",
        region: "Champs Elysées",
        Nom: "The Peninsula Paris",
        number: "+33 12 102 007",
        prix: 1700,
        Stars: 5,
        img1: "https://images.trvl-media.com/lodging/9000000/8300000/8290900/8290864/9cc3c231.jpg?impolicy=resizecrop&rw=297&ra=fit",
        img2: "https://images.trvl-media.com/lodging/9000000/8300000/8290900/8290864/0663ceef.jpg?impolicy=resizecrop&rw=598&ra=fit",
        img3: "https://images.trvl-media.com/lodging/9000000/8300000/8290900/8290864/b5d86ebb.jpg?impolicy=resizecrop&rw=297&ra=fit",
      },
      {
        _id: {
          $oid: "6383a441184d1a3117013a28",
        },
        Pays: "Dubai",
        region: "Dubai",
        Nom: "Raffles Dubai",
        number: "12 102 007",
        prix: 1850,
        Stars: 5,
        img1: "https://assets.onthebeach.co.uk/m/6b97b0f984d2c95b/Medium-hotelimages-raffles-dubai-hotel-3029857-1",
        img2: "https://exp.cdn-hotels.com/hotels/2000000/1700000/1696200/1696177/73cb1476_z.jpg?impolicy=fcrop&w=500&h=333&q=medium",
        img3: "https://www.raffles.fr/assets/0/72/287/288/1373/ff6a3a0c-806d-45d9-8703-ca89616a70d0.jpg",
      },
      {
        _id: {
          $oid: "6383a519184d1a3117013a29",
        },
        Pays: "Dubai",
        region: "Dubai",
        Nom: "Sofitel Dubai The Palm",
        number: "71 102 007",
        prix: 1850,
        Stars: 5,
        img1: "https://www.ahstatic.com/photos/6541_ho_00_p_1024x768.jpg",
        img2: "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2021/06/23115327/Luxury-Room-sofitel-dubai-the-palm-2.jpg",
        img3: "https://il.bestattravel.co.uk/Images/Cropped/MID-UnitedArabEmirates-JumeirahPalm-SofitelDubaiThePalm-803177-MainPoolDay-3-SofitelPalmNEW(2).jpg",
      },

      {
        _id: {
          $oid: "6383a7e9184d1a3117013a2b",
        },
        Pays: "Dubai",
        region: "Dubai",
        Nom: "City Seasons Towers",
        number: "71 102 007",
        prix: 2750,
        Stars: 5,
        img1: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBMTExcTExUYFxcZGBcYFxgXGRgYFxoZGBkYGhoZGRgaICsjGhwoHxgZJTYkKCwuMjIyGSE3PDcwOysxMi4BCwsLDw4PHRERHS4oIyU5OTExOTEuMjEzOTExMTExMTExMTExMTE7MTExMTExMzExMTExMTExMTExLjExMTQxMf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EAEsQAAIBAgQDAwcICAQEBQUAAAECEQADBBIhMQUiQRNRYQYyQnGBkaEUI1JTscHR8BVDYnKCktLhFjNjoiSTsvEHRFSD8iU0wtPi/8QAGwEAAgMBAQEAAAAAAAAAAAAAAgMAAQQFBgf/xAAyEQACAgECBAMHAwQDAAAAAAAAAQIRAxIhBBMxUSJBYRRxgZGhsfAyQuEjM8HRFVJi/9oADAMBAAIRAxEAPwDmwKlFSy1sLXt6PJWRisy0QLWwtSitQOK3logWt5ahWoHFZFFC1sJV0VYLLW8tFCVsJVk3A5a3loot1vs6hdMDFZlo+St5KhKYvlreWj5KzJUJpYDLWBaZW1TOJazhlDXhndhKWQYJB2Zz6CnoNz4b0rJljBWw4YpTewvg+H3bhhEJjUnoB3k7Aeug4jDlWykqfFWVx7GUkGg4y7icSge662bHohibdrT6u2stcPiAx7zR8PYQW1CPnXXmylZ1M6HXes+HO8k68vzzHZMChC11AZazLRylaKVtMu4CKwiilK0VqqJYHLWitFy1mWpReoDlrWWixWFaqi9QEitRRStaK1KCsERWoopWokVVF2DIrRFEitRVUXYOKypxWVVF2NBamEooSphKOxekCErYt0wLdSCVLJoFwlSCUwEqQt1LIoCwSthKZ7OpC3VagtAsLdZ2dM9nUuzqai9AsEreSmRbrOzqai9DFglT7OmBbqGE4nbzPbvKEAaA6+2Myddt19xpc5tdFZcYLzBdnWxbqxxGDKwwhlbVWUyrDvBFQtWhOug6nuHU+yq5sWrsLlO6FMRiVwyC4QGuPpZQiQTsXYdQOg6n1GqO8y2WZr0XcUxJIfmS2x63PrLn7Ow6ydAbiOPOc4jUXHBFgfVWVJVX8HMEA/vNuVNAwivbtC8hg5mQPALAwCSCfNMEQRrvFYt8j1P89DTtBUTGDzP2mPulDBJTzrxUCfN2tiNg0HaFNX2FwmHcC1hbmYqD83c0uzJJjTK+s6LJ8K5JHSc1wFwMzMJMtAJKsd9djHQ706q2L5zW2Ni6YOS402yY9G5uh/f0/aqmpY57Py7bBOpR3RdXcOVMEQaAbdFwnFWzfJ8cCriAt1gcw7hc+mnc+431GzeKwpRipEEfmR3jxrZizatn1/OhknhrdFabdRKU61uoG3T7EuAkUqOSnClRKVeoHQKFKjlps26gbdXYOli2WtFaOUqJWrK3AEVEijlagVoS0wRFRIopWolagakDisqeWt1RLLUJUhbo4t1NUoNRo5YAJUhbpgJUwlVqC0ABbqYt0cJUxboXMNQFuzrYt0yLdSFuh1l6BUW6kEpoW6kLdC8gWgUCVvsqb7OsFuq1k0CgSqHG34utbxKEiT2biA6oScpVtriRsD7CtdWtuuJOLIZ7dwZ0Nxzkb0ZYybbbofVoeoNU25PYGUUkWnD8RcwwlIvWHOsTlJj327gHf8RV1ftWrth3RybTK4ZhoyiOdWA2YKT4dRIqgwZNpHuWQLloiLivuB0W4vr2ZeuxB0o2HvLbVrlrM1i4OzuoTLLmB0PedyrddRpzCl5It3XX7+/s/uBCel79Ck4mQ0M4i7cyuQNBat5Yt24/dg67AL4022IQ4fs1BBJQsIGXNbFwZlaZ5g8mRp6ttXsLbCXHe6lx2dmBVvRzLGVY1nNqOkREgwku2m3X4b03BBTivQPI2mCFwWuYAMQCRIlZExI6ie/+9M2b1m+vzii05Gty2OQn9u2NvWkfumo3MOrWbjB1DBXgMYYwBsPGT46UphvMAPcJPXr76koxlka7ItWoX6luzFALOIBe0RNu4pDFBPnW22a3O9sn+VquOCXWg4a6QzW1D2XBkXLR6KeoG46gZgYywOewmMyqbbDPaJllJ2OnOh9G549diCKsOH/NtbAbMqt2ll/pJ+utkejK5pWdGXSc8lE4uDsKLvZl09uhtbqyu2taC1utMcgt4xE26gbdPm3UClGpgPGV5t1E26fNuhtbo1IB4xEpUGSnmt0JrdFqFuAmyUNkp1rdDZKuwHATZKgVpxrdCZKuwXFoWit0Xs6yoVTLu29o7XLZP76/jTgwp7q5hMHdTL8wryi3I7VUIDawRcCyR1iR41LgGKxAZLdhSCZBzEZDAZoOYQNCNtdR31xIccnFybVI70uEadIv7t20hKtcQECSCwkDvI6DUe+pYa7bfzHV43ysDHrjaqbiXFbtq7iGbDrNwdm8yQEUZGVGYKDJAM/siudbG5WBQAMJjKxB1A1B0NX7W3v5EXDro+p6ILdSCVR8D48pGS+SCPTI0Opico+NdJZhgGUggiQQQQR3gjen82xfLaAi3UxbpgW6mLfhVPITQLC3WxbpoW6kLR7qB5AtAr2dbFumuzrYt1WsvQLJb1rzLF6Xbndnaf5jXrNu1rXk+KM3bkdHafefeP703BO5Cc0aSC4YsIe2SpX27jWRswI0IOkb6U018QbtpYBEXbesa79f8snY+iYkyFJTsarO0dPZ0/PvqSuyntLemWZG6mQ3nDqCJBHcTpWzJG1aMie9MUwwUAhDmTMSCdzt7m6ad3dRQdNNv7D3/najYTFWewYW0YS5b0SAJWFY76c3vHXYI1E/D8Pz76HBK4IZkXiZl5bTWbkkq2U5RBIO0SRt6Xw9oMJ5izqI3799qftWUa0/aDIsH5wnRfALu7eA7xMDUQQBEyDmUHQ9/nDUdDt+J0oU/wCqE3/TAsv8s/h076b4RdMrbX6Ye2CdrqwQAf2wMntU9KWKzzdO73beFYrwVcaZSCO4EQaZlx6otARlTPSLluhNbqxuJQmSsEchq0FebdRNunjbqBt0xZCnARNuhslWBt0Nko1MFwEWShNbp5kqDJTFMBwEWt0JrdPNbobJRqYtwEGShslPOlDZKLUA8YlkrKZyVlXqB5ZRY3H37hZjfuEoVUKCMxBGuUmMqjbWNWo/C3uOFVEvvcYuwyOmnIlsnKV5iFIUlW2gHSJqLrntW78x3yd++vPAjrJ0opxeRoW5DDMC6XLajUqNnXMJj8RXnKVNRPQFnea7kdbj3SARlS49vQy0wIyrJBkGSYO0GlcQM8MtoIhCgEOhSQdXBEyxkDfuqOGuF1f5zUuqlmdGgnOxWVQgHQ6EEmSdINas4tlYRywAGAuoJERLQs6kTpGvhpWiKTSQmdroNYm0FZgBG2h12Guvr6V1Fri1jC4fDi8SM9pSIE6ACftqgxLZxngCR6JDDu84eqab8qOHtdGCQZxFi3JRc2UN2ayfaRoNarPkWOTkTApZMUUwflBxq3fdOwe4QoOYKHGpOmnXakV4i1phluXUYQdc0ROsg6EVC9gHwxQu91QdSTb1VcxkjM4nU+GpqzwWKyAu6I6sYzXbWZhagDMCDvPoj15taRjm5vVHce4KK0nScP8AKey1pWdLhYCXNu0xWRvGu2lchcR2JfJdMksDHQmepo9lcOLYjFOjEHMqhwuzEagzvl9jHu1jf4h2YK2rxcDRcwgERMncg7d/XWnvFNypfYWpQir/AMjPk15RpYzi8bptnzdMxDLExLaCD9lNeUflHYv2uxtrdDllIlVEgTOoaqK5xFmt9lksRAUMEHaaQfPC5pPUz1pNrV1mDKFzTAhiup0iMseG1SWOajuq+JSlFy26+4YGK7KGyXFgiDpv02NJlZuXCsyLjFh45ums91bsWsRezaAqoBJzCBJj0oG+lWGHU3e0UgLfVocH9YVMSCdrknUbOf2tz4SSjOmI4u9NitlQRqYPQd+gj1fmKy6xKmdIn277d5/JrJXZ9G1EHTX9ruP5MVO7bJHMYOw6E7+71/bXal0OV57lXwsygI0EmB7vhVxZwyoFe71ErbGjOOhJ9BPieneF+FWRbQXLqjPLG3bI0MGM7g+iCDC+kQemhsHthSbl8lrrai2T3jzrh6fu6Hvgb58b8K/Pz3jsn6mQvtntO98BUghAuhgTK2re3rc7aySTBTFiOdTKbKDvlg5Z7xHX7KJjb5Yl7stGuXYkCTlEaKsCNPZTGDsi7aD2eVtJtEzqAf8ALJ84R6J5tvOqv7eTf+CrvGKEdTv0Hu935igshIzEabeG3SjHx87u92/j+dKjcckAHcH36AT4Vqk3WwuJ621vSgtbp5U5R6h9lQZK4KmdbSIlKgUp4pQ2SmKZHESZKgyU4yVBko1MFxEWt0NrdOslDZKapgOAiyUJ0p10oTpTFIW4CLpQmSnHSgutGpAOArlrKLlrdFqB0HF2+FXGDOS6DtBbPIDuyq0ErqVzaoTm0A3IpS+4VsuZsqkqCWtJMGJymYOm099XfCsTi7aL2Nh8puStxTdGYhwcgZSAVOWD1idZ1qVjE4m65f5OLoVbsh+a2AXLOebYq2Yb9T1rzinKLd/c7LSdULcKv3TbLWl7SbttAwYEg6kWxcUADNsViSOoprH2MQ91rrWTaVGQOqMQq5oC8sF5bMpgN1EVTpiezVXmeblLOAGAA0DAQdZ0HrmmLmNQsqhwYKknMczaiQwdo5fd3mK0xctSaf0FyrTTRe8StMo5xlfLDI2bOI2LZ9dZ09VN+WuKaw+FCpbY/J7cZ0DERPm5gY26a6CqrFYjOZL5+UcxiSJMHQnp4kV0PloinFYe2TzGxbyr2YuTHazKlgSBvyzQZ2nevp5hYo1FKJzGI4xdaO0t2ojzuUMI2AOWYnTeoYXjJUeZaPcXfOR00lY+HSi8Vwvye6tq4zABWYswyNBLKD2Z3BIgEkRPhQbeGK5HulrSMJzzm0YAgqCBmnMOvUGn8Osaj4ar86A5HOy0e5hHUvcvXUuEksiABFY6kJqIUHbw6UmuISGUFjzAIDcbUAEST6J1GgkSZ3oN17OVStx2Mc4PKFaAYBkyN+7YVPC8Nv3JKW7jebCrcJGW5IRpjrlMDpBrQ5KCTb+YlJydUbSxcgsFJVYLMLlwgTouaFgSdKcPBsSLPbdkptsoIZrp80xqJEg7a7607fwqWWVcQzW2fKcvZCcoMErzQvuovEcYgstbs3LjiNFdAhgsp/zFYldO4eGk0Ess5paUn8H0CahB+JtfE5q3avKzG2gOWA+c51HTZ5G/Ub70ThV4Xly3CFuCArHRXCgBRcJ0DAGA+0QD30LEXMmbLswAOZnY6RtmnLrppvSvDXBDgnXlK7+bCKPvP50PBjrJbpdv5M3ESUoUnZdY4I5i6CLglS+pIIAEXF3eO8ajrm0AQxqFeR9DG+4ykEg5hupBkEdKaw2NAypdGYAZVuLq6DSB3Oo7tx6J728Thly9neaVylrdwAsFDZuafSt9SvQzsZU9CT0Lf893+jDFW1ZX4S29rnvHNfJkBoITYKzftQBlGwGU91Dbc5iSxJkmd+9u8/nWhWrDW+R2zPOrBswEnQSNG06jvj1EmNDv39223f8AmKvBtBEytuTI4m52csdSJIB2O+jeHh91N8Py3rQZStu4YldFtuZMEdLbyDp5szGXaq3ifKjDqQY7hM1LhaHsRqc3Xu84jXxk7/8AelZv7i3GY43jbLC4yuxW7y3Bp2hHpCNLg6n9rcdc3RTE4dknPowaIO+wMz1EEQfH1Uwl8MAl3UgALcGrINIH7a/EeiehJcssV7C4fnAJssNQyxIQN6QbXL3HT0jBSk4L8+gMY6j1y0ORf3V+wVFlomGM20/cX/pFbauGmdlIXK0Nko7UNjRpk0gGWhMtHc0F2FNiwXEE60FxRXegO9MTAcQbigXKncelrj01SBcDTmgOa3cuCk7+Ltr57qo13I7tNPXp7aLWA4hZrKpW44g9O38T8RvWVXMRNBVWfKhUUKtmySGDZ+0uyYMwecadNqJgOJ4kE9lbMG2W7MFshQSDdCzAknVvV3AVvAeR965mLXCCphkQhiIOq5zy5411Majv0vOH+T1u3JUC6HAVWuZcgMxB5RBJkT3wOmvFcbVo164xdM49cW1sqWgkMZV3kEQvK30l128TrrWPxKcwCW1zMpld1gAcpkmDvBnUzpXa4PyXs23BdHYIZdWYheacqvCyBKkZveBqaR4p5HF2Z7LlTJi24gL+ySIIOs69BOu9O1rrYGtdKKS1fkkgyNYIECPV0rrv/Exn+W2ktFu07G2FCmGJm5t1PsrkbvDMRZcq6qD3FhqNRIObUab69e6rTivlDfuubty3b7aLYtlLbEQpJ0fOQu5kHfwocmqtUVf8j4NSSVmuN469h7qdrN1kBOW8gUwZAVgxMr6W+hPWp/4lXIA6WmMDTI0JygacwUnSIiNj6qji+LxF/mdTmJnMslgAIy5jMLA28a0mENtRcGZ3622tMV1kHMx0J36bxRY4qlqW/p0Klqt0QGNIbNCnUwC3LrPolY9lMcM4iUYHlBzloPPsNNSAwBPogiq5cO2mfMuo3BP3b+FQDtBifj8NNK1tqWzM+8dzsMZx+1cPzjpuYy2SGKgtrJuabzAOkbmp8QwnZYcYhO0KsOUugRCpOWc4cwYM+bv1rkcJcuWmVyhMQQtwMVbeJEaj8Ks8Tx/Evb7MpFsHRQGFtTJOgMides7ClOTjSx7Lz9wWmM7c+v8AkhiLoOU3CUVxKmSwMHKYGmgII9lJ8JQZXzHUxl9RP4b92vjK5uMWnLJPTfUxssfZU+DpysOhMyTtqsj2de+PUa0Yp3kQjJFaGWdhgBk3n0h0283w+3wo1nFC2OyuEvbYnzdShMjPbnrtI2O28EARIAA1U9fdJHcO+fb4B4i2SFXmDBpbxg6DuOu/3b9TLp0bnPhvOidpFtxaVw+p512MmeWdcsd8dfbPOBpv4+v6P518Kr+F6IE3Enm9o17o8P7VYYe0zkW0GbNO2k6CTJ80Abz03oMUloVhZY+NgcVaLjs0GZn0WNdTO35/Gi4TDBLRtvIuKYJkERO3iOsg7CdtKNcYIrWbBzs4Zbl3YRBzKk+agElmO4HRd17atpbaCAoGcHcCAHBO6HQwep6GkuWvJYyPhhRiLC5ZmRuPZt4fnSmMFczKLJbmzTaafMfpB+ixEHuMHoZX7PKpAMgzJ26fD2+2lpAU5TKwSXgwCI92408R4U7LTikLgruj2C15TYXIua6obKuYQ2hjUbd9abylwv1q+5vwrzNJfmO7an1nU0/h+HM3SvOzyKB3MatHcN5S4b60e5/wqB8oMOf1qe8g+41yZ4Mw6VX38GVuEHw+ypi4hTewbhR278dw31qe+gPxzD/WL7641rFa+S1oUwNKZ1dzjdj6xffQLnGbP1i1zXyKoNgaJZScsv7nGLP1i0B+LWvrB8aomwtCazFEsrKeIvLvELTAjtF1BHXurk79vXQTTvZitBBRLJICXDxl1Yt+j/27ftNz7lrKZgd9ZU1sr2eB0oOa4EDAWyAhYg6fRcgHzQfCIJ8KvOF3cPYDq15SSmhaW5o11y+a0xBGhHjVVZ4UnaLaF0NpmkWzAJGYAy2giNfGqXjeJDXMq5VCmC2dWzcwWV2no0d3WseGfD5nplJpe4OeKUVqirZ1A8ocNbXkR3dZUkogDpGzEsJmPOImVB12rnHPE7jyLV20siB81cCjQAD5vN39ar+G4q1kIee1ZgE5gEUENm7QaldhHrHfVdcxlxMzC/bgdAZjRADJWIk/A7VU3ghJxg2/UuOGTVyR0WO4biSQWF25pJbJABLElRlUAjrt1qA4ZiY/yrn8h8aHwzyljKLrocqMcrMiqdSJBCTIiANdzrV9c8psOSIe11/WL0K+FFhtx2RoemGyZTrw/Ej9XcH8Bpbil57BAuK6lhIBUidd66RPKbDuwGe0JgGbqQNW1mPVXNeV+Nt4i7ayPb0hTDKw1KbkaDf76PeO4jNmqLohY4hhrilbrXQToMgXbqObTw1oZGHUk57sQrLC2iRMzqbmvTSJ1NAs8MXmz3bYCESQc2vcAPO23EjUUB8MpzAXF5WIkyM28ZVjMZgDbqJikzm5b2c+HEpukvuMDsSCTcaRJ5rcFpOkQDr3kkb1c4vhdlFW4LjOp5eVUBkgkgLl5Rvvv7aQ4JZFy9bUEMSyiCNpnTXSuh4/wi7bHaNcXIIAtgSZPUtp3DTWrUHaqVDMeZytONlSMHYlezN2e0kaWwY0y9IzfCqnEWggF22o7C4xc9yHSVkDQodANcwKmNYHRYcCJGhGojoR1quXFWRbZ8gNi6zG4gGq3NCVk7EHMUI6EzIDitEE4SVFvxWLByQFUZkJksZEwUMk+hB6dNPOnVXHzPzPOrSGO0jm0b6I8esTPoiwxWGCKrWIfDlYdjAGcFv82NQ4B0jxyTJlLDOrM3YyF11bzs0iBcjZY2jSSNM0R0NdxfqZUvFa8hbgllm0Bi0JZ7jSFUd5MaN0CxJ00M1aYVy02cOB2RBNy43KXiJNw/q1HRdh+3oTrAsjjNl7PCrmLAwedlMZgRLXZ2jYbQA1DxOIEG3YAWyPPJIOYxvdYdZmI0+jrNLhJ1Rc1bZDEFNbVnW22l260gkan+BBEgAc0SfojDKIFJDWjlZLo5QYgTOuVwNCmvQQfOqORI5DFoqTcJjPG3MJ1GoiOsdalbXs1BSLmEbzg8CCBOVo1F4dCN/3ZAqT0y2CivCSLZrZywyEQWOmw9KPMjXSfa29JYhItlVk29SzGZkEd+0QIHX3gWVzDAWc1jmtFhmLESAQwy3VGs5hoRofR5poGIYLbOVfm8sMGENJIIbT0tAAekmepp7mpxbFwVPYa4VjAHRSkgwNDH3a13XDcXbUf5fx/tXB8P4RdcJdtusiDlYEf7hP2U7du4pZm03rTn9wXm+FcTLgxzl4vudKE5JbHa4rjFrbsj/MPwrnuJ/OvnXkGmh1208K5w4rEMTo38rj4ZZo9jE3CQGt3Iy6mG1bTbSfhTMXA4YO4vr6gS4iTTtP5DWORkGbOG1AiIP2mmuFr2gnQ+0UFbGHZRnGInQkBdJ/5dC45bm2q4dLmYODz2QSAARAZbYJnNqGzbDaK0ywqUaXUkZvqX64DwHvFRbh/q94rnLONxaqP+FDECCexuAnwgEBf4QKPZxV9yM2EA1GpsPy66wSNf4s1JXA5G/1IP2lL9rLK/gPV7xVNi8ORNds3C8ONrSeJypLevlgD90Cqrj9q3ZyG3hUuyTmUWlYhR4qp31EkGqx4pJjJSdHI3FYUhddy2Xv7t66s3ENs/8A03LcnQdirq2+hm2uXpt/aqy61/UrgLQPQfJ1kepgJ99P5UmuqXxEuUl3fuKr5E/e359lZV72l/8A9KPYt4fBXgeysqvZ8n/ZfMDm/wDl/I9PucItqlxokkGBlUBT6OWBpXJ3XugwGIiZ0WdO4ZZro7vHbZTK7oUgZiSqzlBljr+6Y8DVA2LsXLxKshklgoaIVhIkbgRH5mfORzPU66f5O3jjJbS3ZYYXA3mtq/aRmO3IABqJJy9/d+Mb4jaa2iw/MZkcpEiNjG3r9vWK5/KY2z2Vu2p1Uhy8pGpy+BnSfXp1M7nFEvF1YqGtquZQ4ygsS0o0c46a9dwa0Rldu/KxOuWpJrzNNibgk5ts08qzoJ2y/nTxiy4QpuPbDwZSWjQFgNduk1TtiUKnnSYYLzCNRp0+Pr1jQ2vAseqjeeUA5SCQynNIk9+lLyZpRi2txrj1RbXuHKlpiDmaVIOWCNdQI6RNecf+ICNcvWsi5iLbxAkjmImANe/2V1vGfKZZRMqx2gzJoTGUQjQTBknfuBilsLesXXJdLfaIJBKCVDmQFJ2U6iB40eGb1PbbyE5MTnBxbVs8tuYHEW9HV1J1IZcp9ZmmLeAPZ52uFSXhQSnQiTAbNoD9GvW8cq2xmYKgyJMQB6RYADceHiap8fxPDBGcBSS75dgDpKhmPmzA31k1ojkt9DBPhlFXf0OX8isHeOIS4qMUDqxeIWBPU7+yTXVeW16LP8a/fVXwvyoZYS8i6xrbOgGv83t7vGqTivF7mOuulsXeyVtFVVG2gLGZ11jXrTYybZUMaXQLaxBg7xBqq4PilRHDKDbYxcU7NJBjwYwWBGxH7Orl7h91LXaG22TP2ebtHBzfuyfvjSYkU3gLa/JjbN2zDwxzOMqmbbFXhSQ0KRp1PgKdrlJ7K6fcNxjHr5hVS1bw/a2GLWpZXUglQCBC3lnmYsNCImBlIjSpOFFxTewpYKnNctn/ADEENLH6xIJ9UkEbs3U8N4W6Wjct3bWTKys2bNaGYryXARDDQSIBOmtTt4SxbBaxes2284xcLBGKmSj5ZYbkZtRqNQK0Kbp0nZllGKkt/occ+Ie4FuMAtqCOzAOUSRMAnVmInMT3agAUS4VC/NQEGjztzA63B6ZJAAjQ9AuwHce5cudsy5VMJlVdGHRVVRCgiPUT3xJEwdxke9bhLdrKHHRc/KZGznvJ3kA07HJdAZRaVtCeKIyHs+VFBLA6tswgzvIJEdNd9WJ+E8RdLZ0BssIZCoIPMTl0gzJJDTp3g0HG2neTbRoXmIEmc0wwY75vHptIp7A4UNZUtctIDoUYtKjPzSMpULp1J6bmgnLU/Dv8Q4x0rfb6hWOUi9hDFsL87bbUpm0IuKf81G79p0hdKHirKXLZu2AVVdbtrUxOgIPVDtuSvj5xfwXDbgQvYuW4QkllzMFXIcwJKnNoDIkyGG4otjh6M/a4e5bHZgvcCdq1od5yi2eUruh6BhttLfYCkt0M+SN0ZFU11uBwEksOteeo92257Ky+U/OqpnNkOsqPSAB7zXdeRfHUuDIwZW6Z1K+6d/7Vzcqb3NmPYsLGFU3QjEwSw0gc2kdPXW24Vc5gpBIlhr5wnzdtDECahxLEqrPAGYGVYGCDoRPfEfGjfp5YjKCzaH1el7/xoYNIfLV1RXo7E92+k7EdPt91Stu5MEfS6+P3CPfWkvpmkf32Ek+JImiWntg7E79fz3n4Vvjp8gU21b2IWy5nqe6dtSN/h7KiGeBP/wAuX4d/spq2yxGQx6/H8IoTrAgKfHXw6d3SmJrsWm7B5agyGRA6fYR4+NHUaD1Vq4CTAMGDrE9VorFr9Qu1u5JnQawcwn170C7bc6CJnTXppTb2TEEn15TtGo3j/vUThWY5gx26AEd871E16Db/ACxD5Pd7l9rVlP8AyV+s+7+9ZV6l6F2UHCf+LNxj2YyAKMxmCXCLlAECSRvPf0FWPGOB2rCyRbKw4Iz3N7i5YBYeAOh6VV8JzC4wMrPZfOczKcjq8ZWYncHqNh36XdyyLqg37reaZ7ICVaQAQY3yyPafXXm6SNL1a7SKTA+S74gZwbaTc5QGckZlZgpJUjKMvcTPfVzhfJy5h3UXGtXGuOFQZmKgiDLSnhG3XwpngSrb5LZY5jLXGJ3CEea09SetBxTOUtRnNwEvJJZQYQAdpAGY5TpMiRvrNqOpC94y2QPyk8kbrDO7WwAWKrb5QAFZzr2ep5OpI02qs4SWw9yDbtk3BstxlBIYifN39XdXZcfuu+W1b0MlWdpiWRkJWEIOjHqK8/4jhbyuGLM7oxCGFgA6nWIknpr8KYoq6Khb3J3OGXGuSFKlspgXGY6toGMRGhjSat+EcMOHuspys72xd53MhRMABVJkzp7PbzmHvX5lrqjYEHPmGUmNVQjSTsRVthuM3BdzIMsplaIBJygE/wC0eOnSYpiVdEKm5p2hvyktX8QyOlthlBGYFyAyZsrAMBlGpBI3DVS8a4UbJd7vmsQyiGBLOQSSJGcRmiY3OlP3vKR1BU+cZHMdfaYP2e2qfil84m4ty5cEqDCySuxA3Weg1jrQxUnLfoRQ1K5LcHhMStu9bRbedibTJmKhlDhTqvUcw08K6DhfB0wtp7lxg2IuqWypLhWAJhjGrEsNdvvV4Dg9V1UkLaUsmWItgAHmUa6bAbGugxKX2QAZm09LIT7MoEVohFJ2iODXmc1eN0qDdzBDGZdioMFzC6AzPhQeDcKuBVfEsUtArb7MGC5DlZB3FvMTLdSNNdVuhwm8x50JHUaajwnSavMZgFuAAWmgZYBdlHKAAAJ2AHsgVU3JJ0t2RRVq3sVWHe/2jIl+0ltBlEW1yBSWGXIZldDrJPNr1NV/FfJ5LjMLDjONDbQkW3JBPzRPmk/RPsnRa6f9EIxJNkSyhSc77TOncdT8O6o3ODGZUZIA2IOwgecp6fZScU80ZdA8kMbXXc5zyb8lcQwFy6Xtpm1RTlZyHAWJ2ERO/T2W+Bt3mRWt22WyVLELlEdmxnKJ2mJnVtZmnMdwW5eKM9xyUbMNUmcrL9DuI91QXybYDS44jbW3/wDrpk5Tb229wuMI1u7Oe4t5PNetrcw8pmt2ybR5VZisr2UQF5vR7jofRquwPk+q5LmILIcobsx/mOGyLIHoqS0a7xAEajsLPk6y3FftGlUyjS3sSD9DvX40xe4MzNndixkEk5Z0M7gA7x1q1kmoNLqTlxct3scVjU+bW/auR2ZHZ20Q2xbl8uktMnU5tSepNCwqtiSGw/zeIXXInKl0g5syRADggEpsY0jau3PAbPW2p1Las51JJM83jW8LwezbYOtpAQZHnHrPU99Lxyyp+LcOcMbXh2OavYS9h8QZCheVjbQ5gAynNEbLLMQO40g+MZTaKAoQVDHUycwliG20JHQaV3nFcHbvnObcXNBM6QOhjcR0j8apr3kyhOYAA9D19/305RYCqimTF4i/fVAgC3Lip2kMQGOUagHxrok8m8RbYN2yDoCEckTppr40DB8Gu2jy8ymTE6TGhE7Hb8xXQXblzsyTcZSAvKYZpzAaH0unvpU430RHqVUzlm4beXEthzctyLJvBsrQQGClYnQ9ahZxCSYxNv8AZ5bn9GvqGtPYhXuXM7IzOBkzGVOUseWTGkiY8KpsRwZcyuiquXUqwDBhvBg676eunQ5q2SFNb7v60dLaKm0HW+pOXM4VVZl75XcRSd7EsFuP2pIthNrTekJEyvJrpLQKoMNwpgMvaADOH2YHSZG4iYGoiYFTbgcgjtzLTMq5BJGXUBwSB3Tp4VqjDMvLYVLLiTpya+P8HZcL4Cty2HW4rKVkQiMZgHUkCl+P8LOGVbtt9SLmYFFA5bb3ANNpKgVX+TV25hFZLd4MCVOV10ECNNQ20delXrcdLiLltT/uU+Oo0/vU0cQpWWsuPvZxL+UTB+zzNJDGeSNCiweXQy20+2hDysuEKebmkGGSRBy/Qj4iui4n2LW3W2ipJDwgVTIIOhIOWdtO+lLGVRqD0+hI7xIUTW3Df74piM7wtXFtfFnMcR8sbqXGUJdYAwDKa+62ftNZXRdoe741lN5T9PkjNzsHeXzl/s5nC8TuqZW5aka+Zd18BK/bFX2D4zfcntLlrKFJHZi7mZo0XmAgTuT7KNh8VbGww/8ALH/5VY4fiMbDC+9hXj+fi7s9V7LJbgk47iFtAKLBuaEkvdyRBkARJb16UfDcfv8AZsXWz2qhSgDuEOvNJO5A1yiKaTic+hhz6nf8K1e4iI/ybJ/jb8KtcRiv9Qt8M+z+aE7/AJSYq4j5vk6lVVkAuHnkwRM6ECTB16RVBe4hiGJzCyAVnS6m3d52jeG9WuMxgP8A5e17LhquvXUO+GUeq4PvouZF9JfUqPDuO0bKh85bXsxpM9oh9nnaHwOtMYDFdnczEjuMFWBGncdNqObWHO9qP40rYwuF62/v+w02ORVV2VyJRdstnw/D8Tqb4RzuLixJ9Y0NS/wqRraazdHcrqD8YqpGCwx9E+78aLb4dhxsrD1D+lqvmNEljbdsvcNgcXaP/wBnmHTLcTbptViMdfQa4G7PSGB+wVQYI27Z0u3l9l2Pgat7fFFA0xD/AMS3T9tBryX1YLw2Du+U91GKPgrgYGIDqek7xWrflPeOvyF4/f1/6K1d4qB+tT+K1r7SV1oH6XQ+nhT67Qn/AKabGUn5g8iPr+fAZu+Vt1THyG74a6H1SutQueVmJ9Hht4/zfclRHGu58P7Ege6Kl/iMjTPY934inV6i5YexD/F2JiTw28O/S59vZ1j+V+JUlTw+7pvGcj3hCKx/KFj9T/t/Co/p+70ayPaKFt9yLh/UxvK7E+cMDcAOmouTpPTJPXciKGvlfjDMYFiOsh139Y1ov6bu/TsfzR99QPGLn1tseq6fxpeqS8/oF7Ou4ZvKPFHbBgHeDdjT2rUG45jemBH/ADV/Ch/pq6Nrtv8A5p/Gh3eMX2n59B6nGnvar5j9SezLuSfj2LG+BPj86se+KDd8qcUv/kT/AM1fwobY691xM+20ftaojGXOt0N/FZFU8k+4a4ePdk/8XYvX/gdt5u/2o9nypxjGGwOgGY87HYSNckdIpZ8e/wDpnTq6EH+WgNxa59G146n461UXkl+4vkQXmxlvLPEHRcG49Yf+mksZx3FuT8yR4Sw+PdWzxi5/pjpu+3dvS93iVw9U7t327t62Y1lj+4zz4THP9VixxOKb9UP4mNWfDRdZZuIqmdACx08Z67/CqxsfdGxTu3bbuqP6Svj6H+6tmLLmUrlK17zN/wAdw6dpbl8AR0+P40vjcVfWOyNtTJnNqCIEHSIO/fVYnHcSuxt+5o+2pfp/Ef6Xuf8AqpmXNKS2S+YyPCwiqGHxOKYQblgd+mtaa5iTPz1rbQAAwfbrHrmgN5Q4n/S91z+qoN5RYk/Ve5z9prLrn+Nk9lxtU2yWbFfX2v5FrKH+n8V3p/Kayi15O/1YPsWL1L5eFYf6pfj+NZ+h8Of1fuJH31lZXzhcTlr9R6blxItwjD/Rb2O1Rbg1n/UH/uGsrKLHxOVvqU8cQI4BaM63B/Ga2PJu39J/5qysrVHiMl9QHjiCfyet/WP+fCoXPJm3Pnv/ALT91ZWVrxZ59wXiiD/w2v1rfyit/wCHR0ut/KPxrKytMc8+4DxR7EhwR12vuPf/AFUQYC+NsTc8NT+NZWU+OWfcXoRp8FiP/UMfWJ+/Wotgb/1qHum2D76yspyySB0Ij+j731lr22x+FaPDr/0rJ/8AbH9NZWUXMkTQjQwF7vs/yD+mpjAYiP1X8oH3VlZVPLInLiaPDMQfRsHxj/8AmonhWI+rtewx91ZWUt5ZBKETTcHxB07O2f4qj+hL2nzdrXxrKyl86ZNETP0PfBI7O3pvzVscJvaHsrWu2tZWVJZpE0omOEXtfmbem+v96z9G3QB81a122rdZQxzzsmlEP0ff1+Zt6b6/3rfyK9p8za18Tr/urKytUc8+4GlEXwl3X5i1pvqf6qH8kvCPmbWu2p/qrKynRzyAcUS+TX9fmLWm/wCc1ROFv6fM2RO35msrKdzJFOKInDYjX5uzpvWmweJMfN2ddtBWqyrcmVpQP5PiPoWfcPwrKysq9TK0o//Z",
        img2: "https://dimg04.c-ctrip.com/images//200c070000002975u877D_R_550_412.jpg",
        img3: "https://www.kayak.fr/rimg/himg/88/33/24/ice-126971-66062748_3XL-029338.jpg?width=1366&height=768&crop=true",
      },
      {
        _id: {
          $oid: "6383a9ca184d1a3117013a2c",
        },
        Pays: "Dubai",
        region: "Dubai",
        Nom: "Swissotel Al Ghurair",
        number: "20 102 007",
        prix: 2500,
        Stars: 5,
        img1: "https://www.ahstatic.com/photos/b1p8_ho_00_p_1024x768.jpg",
        img2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/133680176.jpg?k=d62fae4913905eadf34a5f677a963bf9a1986bf1a81d36390410f24214bb5b33&o=&hp=1",
        img3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/a4/ae/75/swissotel-al-ghurair.jpg?w=700&h=-1&s=1",
      },
      {
        _id: {
          $oid: "6383abc4184d1a3117013a2d",
        },
        Pays: "Turquie",
        region: "Istanbul",
        Nom: "The Galata",
        number: "20 001 000",
        prix: 680,
        Stars: 3,
        img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254079276.jpg?k=95aa6ddab8420846c13ae9e358ef6ea41b0f1ed63ee3c91845b2268ee0e479c9&o=&hp=1",
        img2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/27/31/ba/suite.jpg?w=700&h=-1&s=1",
        img3: "https://www.kayak.fr/rimg/himg/1b/0c/98/ice-86270-65804740_3XL-436542.jpg?width=720&height=576&crop=true",
      },
      {
        _id: {
          $oid: "6383ac55184d1a3117013a2e",
        },
        Pays: "Turquie",
        region: "Istanbul",
        Nom: "Hilton Istanbul Bakirkoy",
        number: "90 128 000",
        prix: 782,
        Stars: 3,
        img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/329677373.jpg?k=3d77526ca4e463938e112d67c36478b8278e0833a0aecf75383de3e1af5425b5&o=&hp=1",
        img2: "https://www.kayak.com/rimg/himg/44/b0/31/ice-3640818-99789562-871871.jpg?width=1366&height=768&crop=true",
        img3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/cc/68/ce/lobby.jpg?w=700&h=-1&s=1",
      },
      {
        _id: {
          $oid: "6383ad31184d1a3117013a2f",
        },
        Pays: "Turquie",
        region: "Istanbul",
        Nom: "Hyatt Regency Istanbul Atakoy",
        number: "92 093 000",
        prix: 930,
        Stars: 4,
        img1: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1351/ISTHR-P001-Building.jpg/ISTHR-P001-Building.16x9.jpg",
        img2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/113607592.jpg?k=bb8a1e5093d97727cc06b30ffb255ddf3ec403bd34134bda223ed6107572f087&o=&hp=1",
        img3: "https://pix10.agoda.net/hotelImages/895/895225/895225_16092215090046790018.jpg?ca=13&ce=1&s=1024x768",
      },
    ]);
  }, []);
  return (
    <div className='bn'>
      <h1>Hotels</h1>
      <b>Budget:</b>
      <select
        className='s'
        value={budget}
        required
        onChange={(event) => {
          setbudget(event.target.value);
        }}
      >
        <option>--</option>
        <option value='300'> &lt; 300 TND </option>
        <option value='800'>&lt; 800 TND</option>
        <option value='1500'>&lt; 1500 TND</option>
        <option value='2000'>&lt; 2000 TND</option>
      </select>
      <br></br>
      <b>Pays :</b>
      <select
        className='s'
        value={pays}
        required
        onChange={(event) => {
          setpays(event.target.value);
        }}
      >
        <option>--</option>

        <option>Tunisie</option>
        <option>Paris</option>
        <option>Dubai</option>
        <option>Turquie</option>
      </select>{" "}
      <div className=''>
        <table className='d-flex flex-wrap'>
          {listhotels
            .filter((item) => {
              return pays.toLowerCase() == "--" || budget === 0
                ? item
                : item.Pays.toLowerCase() == pays && item.prix < budget * 1;
            })
            .map((h, key) => {
              return (
                <tr className='card m-4'>
                  <td>
                    <img
                      className='ih'
                      src={h.img1}
                      alt='hotel'
                      width='300px'
                      height='200px'
                    />
                    <td>
                      <div className='tdl'>
                        <h4>{h.Nom}</h4>
                        <h4>
                          <b>{h.region}</b>
                        </h4>
                        <b>{h.number}</b>
                      </div>
                    </td>
                  </td>

                  <td>
                    <div className=' '>
                      {stars.slice(5 - h.Stars)}
                      <h4>
                        <b>{h.prix} TND</b>
                      </h4>
                      <button className='btn-secondary'>
                        <Link
                          className='vl'
                          to={`/details/${h.Pays}/${h.region}/${h.Nom}/${h.Stars}/${h.prix}`}
                        >
                          Avis
                        </Link>
                      </button>

                      <button className='btn-primary'>
                        <Link
                          className='vl2'
                          to={`/Reserver/${h.region}/${h.Nom}/${h.prix}/${h.Stars}`}
                        >
                          Réserver
                        </Link>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}
