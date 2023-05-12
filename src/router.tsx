import React from "react";
import { Navigate, Outlet, Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";
import { LoginView } from "./modules/auth/views/LoginView";
import { DashboardView } from "./modules/auth/views/DashboardView";
import { ProfileView } from "./modules/auth/views/ProfileView";
import { HomeView } from "./modules/home/views/HomeView";
import { Layout } from "./shared/layout";

export const Routes = () => {
  return (
    <BrowserRouter>
        <ReactRoutes>
          <Route path="/" element={<Navigate to="/login" />}/>
          <Route path="/login" element={<LoginView />} />
          <Route element={(
                <Layout>
                  <Outlet />
                </Layout>
          )}>
            <Route path="/home" element={<HomeView />}/>
            <Route path="/dashboard" element={<DashboardView/>} />
            <Route path="/profile" element={<ProfileView />}/>
          </Route>
        </ReactRoutes>
    </BrowserRouter>
  )
};