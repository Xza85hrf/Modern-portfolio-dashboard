# Deployment Guide

## Prerequisites

Before deploying the application, ensure you have:

1. Node.js v18 or newer installed
2. PostgreSQL database instance
3. GitHub account with API access token
4. Access to your chosen hosting platform

## Environment Setup

### Required Environment Variables

```env
# Database Configuration
DATABASE_URL=postgresql://user:password@host:port/dbname
PGUSER=your_db_user
PGPASSWORD=your_db_password
PGHOST=your_db_host
PGPORT=your_db_port
PGDATABASE=your_db_name

# GitHub Integration
GITHUB_TOKEN=your_github_token

# Security
JWT_SECRET=your_jwt_secret
COOKIE_SECRET=your_cookie_secret
```

## Deployment Options

### 1. Local Development Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.template` to `.env`
   - Fill in all required environment variables

4. Initialize the database:
   ```bash
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Verify setup:
   - Frontend loads at http://localhost:5000
   - Admin dashboard is accessible at `/admin`
   - Database connections are working
   - GitHub integration is functioning

### 2. Production Deployment

#### Build Process

1. Install production dependencies:
   ```bash
   npm install --production
   ```

2. Build the application:
   ```bash
   npm run build
   ```

3. Start the production server:
   ```bash
   npm start
   ```

#### Platform-Specific Instructions

##### Railway/Heroku

1. Connect your GitHub repository
2. Configure environment variables in platform dashboard
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Add PostgreSQL add-on
6. Deploy application

##### DigitalOcean App Platform

1. Create new application from GitHub repository
2. Configure environment variables
3. Add PostgreSQL database
4. Deploy application

##### Traditional VPS/Dedicated Server

1. Set up Node.js environment
2. Configure PostgreSQL database
3. Set up environment variables
4. Use process manager (PM2 recommended):
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   ```

## Post-Deployment Steps

1. Access admin dashboard
2. Change default admin credentials immediately
3. Verify all features:
   - Project management
   - Blog posts
   - Analytics
   - GitHub integration
4. Set up regular backups
5. Configure monitoring (optional)

## Troubleshooting Guide

### 1. Database Connection Issues

- Verify DATABASE_URL format is correct
- Check PostgreSQL service is running
- Confirm database credentials
- Common errors:
  - "Connection refused": Check if database is running
  - "Authentication failed": Verify credentials

### 2. Build Failures

- Check for TypeScript errors in console
- Verify all dependencies are installed
- Common errors:
  - "Module not found": Run `npm install`
  - "Type errors": Check recent code changes

### 3. Runtime Errors

- Check browser console for frontend errors
- Review server logs for backend issues
- Verify all environment variables are set
- Check port conflicts (default: 5000)
- Monitor server resources

### 4. GitHub Integration Issues

- Verify GITHUB_TOKEN is valid
- Check repository permissions
- Confirm repository URL format
- Test sync functionality in admin dashboard

### 5. Authentication Problems

- Clear browser cookies and cache
- Verify JWT_SECRET is set
- Check if admin user exists in database
- Try default credentials if needed

## Updating the Application

### Minor Updates

```bash
git pull
npm install
npm run build
npm start
```

### Major Updates

1. Backup database
2. Review changelog
3. Update dependencies
4. Run database migrations
5. Test thoroughly

## Getting Help

- Review documentation in `/docs`
- Check troubleshooting guides
- Open GitHub issues for bugs
- Join community discussions
- Contact support team with error logs
