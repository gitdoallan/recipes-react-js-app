// /* eslint-disable react/jsx-max-depth */
// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import SearchIcon from '@mui/icons-material/Search';
// import * as S from '../styles/Header';

// export default function HeaderMUI() {
//   return (
//     <Box sx={ { flexGrow: 1 } }>
//       <AppBar position="static" color="secondary">
//         <Toolbar>
//           <IconButton
//             data-testid="profile-top-btn"
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={ { mr: 2 } }
//           >
//             <ManageAccountsIcon />
//           </IconButton>
//           <Typography
//             data-testid="page-title"
//             variant="h6"
//             align="center"
//             noWrap
//             component="div"
//             sx={ { flexGrow: 1, display: { xs: 'none', sm: 'block' } } }
//           >
//             Foods
//           </Typography>
//           <S.Search>
//             <S.SearchIconWrapper>
//               <SearchIcon />
//             </S.SearchIconWrapper>
//             <S.StyledInputBase
//               placeholder="Search…"
//               data-testid="search-top-btn"
//               inputProps={ { 'aria-label': 'search' } }
//             />
//           </S.Search>
//         </Toolbar>
//       </AppBar>
//     </Box>

//   );
// }
