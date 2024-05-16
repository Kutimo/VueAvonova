-- CreateTable
CREATE TABLE "public"."Services" (
    "service_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "public"."Businesses" (
    "business_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "legal_name" TEXT NOT NULL,
    "registration_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "founding_date" TIMESTAMP(3) NOT NULL,
    "industry" TEXT NOT NULL,
    "annual_revenue" INTEGER NOT NULL,
    "number_of_employees" INTEGER NOT NULL,
    "technology_stack" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Businesses_pkey" PRIMARY KEY ("business_id")
);

-- CreateTable
CREATE TABLE "public"."Employee" (
    "employee_id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "position" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "company_id" INTEGER NOT NULL,
    "company_name" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employee_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Services_name_key" ON "public"."Services"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Businesses_registration_number_key" ON "public"."Businesses"("registration_number");

-- AddForeignKey
ALTER TABLE "public"."Employee" ADD CONSTRAINT "Employee_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."Businesses"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;
